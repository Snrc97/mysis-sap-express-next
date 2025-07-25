import { injectable } from 'inversify';

import { AggregateRoot } from './AggregateRoot';
import { IEventStore } from './interfaces/IEventStore';
import { IRepository } from './interfaces/IRepository';

@injectable()
export class EventSourcedRepository<T extends AggregateRoot> implements IRepository<T> {
  constructor(
    private readonly eventStore: IEventStore,
    private readonly Type: { new (): T }
  ) {}

  async save(aggregateRoot: T, expectedVersion: number) {
    await this.eventStore.saveEvents(aggregateRoot.guid, aggregateRoot.getUncommittedEvents(), expectedVersion);
    aggregateRoot.markChangesAsCommitted();
  }

  async getById(guid: string) {
    const aggregateRoot = new this.Type() as T;
    const history = await this.eventStore.getEventsForAggregate(guid);
    aggregateRoot.loadFromHistory(history);
    return aggregateRoot;
  }
}

