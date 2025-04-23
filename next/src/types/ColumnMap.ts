import { CrudMode } from '@/components/ui-reusables/datatable';
import { ReusableFormProps } from '@/components/ui-reusables/reusable-form-element';

type ColumnMapProps = {
  table: ReusableFormProps[];
  detail?: ReusableFormProps[];
  create?: ReusableFormProps[];
  update?: ReusableFormProps[];
};

interface ColumnMapInterface {
  table: ReusableFormProps[];
  detail?: ReusableFormProps[];
  create?: ReusableFormProps[];
  update?: ReusableFormProps[];
  getByCrudMode: (mode: CrudMode) => ReusableFormProps[] | undefined;
}

export default class ColumnMap implements ColumnMapInterface {
  public readonly table: ReusableFormProps[];
  public readonly detail?: ReusableFormProps[];
  public readonly create?: ReusableFormProps[];
  public readonly update?: ReusableFormProps[];

  constructor(
    { table, detail, create, update }: ColumnMapProps = { table: [] }
  ) {
    this.table = table;
    this.create = create || table;
    this.update = update || this.create;
    this.detail = detail || this.update;
  }

  public getByCrudMode(mode: CrudMode): ReusableFormProps[] {
    switch (mode) {
      case "create":
        return this.create || this.table;
      case "update":
        return this.update || this.table;
      case "show":
        return this.detail || this.table;
      default:
        return this.table;
    }
  }


}