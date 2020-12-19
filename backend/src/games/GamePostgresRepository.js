const PostgresRepository = require("../common/PostgresRepository");
const Game = require("./Game");

class GamePostgresRepository extends PostgresRepository {
  constructor() {
    super("games");
  }

  toModel(attrs) {
    return new Game({ ...attrs });
  }
}

module.exports = GamePostgresRepository;
