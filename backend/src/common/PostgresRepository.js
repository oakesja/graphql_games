const knexConfig = require("../../knexfile");

class PostgresRepository {
  constructor(tableName) {
    this._knex = require("knex")(knexConfig[process.env.NODE_ENV]);
    this.tableName = tableName;
  }

  _db() {
    return this._knex(this.tableName);
  }

  async create(entity) {
    const toInsert = { ...entity, id: undefined };
    const response = await this._db().insert(toInsert, ["id"]);
    const id = response[0].id;
    return this.findById(id);
  }

  async findById(id) {
    const found = await this._db().where({ id }).select("*");
    return found[0] ? this.toModel(found[0]) : undefined;
  }

  async findByIds(ids) {
    const allFound = await this._db().whereIn("id", ids);
    return ids.map(id => {
      const found = allFound.find(e => e.id === id);
      return found ? this.toModel(found) : found;
    });
  }

  async deleteAll() {
    await this._db().del();
  }

  toModel(attrs) {
    return attrs;
  }
}

module.exports = PostgresRepository;
