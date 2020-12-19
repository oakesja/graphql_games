const PostgresRepository = require("../common/PostgresRepository");
const Game = require("./Game");

class GamePostgresRepository extends PostgresRepository {
  constructor() {
    super("games");
  }

  async listByDeveloper(developerId) {
    const found = await this._db().where({ developerId }).select("*");
    return found.map(this.toModel);
  }

  toModel(attrs) {
    return new Game({ ...attrs });
  }
}

module.exports = GamePostgresRepository;
