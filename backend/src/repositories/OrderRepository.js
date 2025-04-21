class OrderRepository extends BaseRepository {
  constructor(model) {
    super(model);
  }

  async create(data) {
    return this.model.create(data);
  }

  async update(id, data) {
    return this.model.update(data, {
      where: {
        id,
      },
    });
  }

  async delete(id) {
    return this.model.destroy({
      where: {
        id,
      },
    });
  }

  async getAll() {
    return this.model.findAll();
  }

  async getById(id) {
    return this.model.findByPk(id);
  }
}

module.exports = OrderRepository;
