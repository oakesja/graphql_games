const DeveloperPostgresRepository = require("../../src/developers/DeveloperPostgresRepository");
const GamePostgresRepository = require("../../src/games/GamePostgresRepository");

const repos = [new DeveloperPostgresRepository(), new GamePostgresRepository()];

beforeEach(async () => {
  for (const repo of repos) {
    await repo.deleteAll();
  }
});
