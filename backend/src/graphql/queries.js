const GamePostgresRepository = require("../games/GamePostgresRepository");
const gamesRepo = new GamePostgresRepository();

module.exports = {
  games: () => gamesRepo.list(),
  gamesByDeveloper: (_, params) =>
    gamesRepo.listByDeveloper(params.developerId),
  game: (_, params) => gamesRepo.findById(params.id)
};
