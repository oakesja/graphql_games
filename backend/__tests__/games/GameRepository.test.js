const GamePostgresRepository = require("../../src/games/GamePostgresRepository");
const GameBuilder = require("../helpers/GameBuilder");
const { itBehavesLikeARepository } = require("../helpers/repositoryTestUtils");

describe("GameRepository", () => {
  const repo = new GamePostgresRepository();

  function buildEntity() {
    return new GameBuilder().build();
  }

  itBehavesLikeARepository(repo, buildEntity);

  describe("listByDeveloper", () => {
    const games = [
      new GameBuilder().fromDeveloper(1).build(),
      new GameBuilder().fromDeveloper(3).build(),
      new GameBuilder().fromDeveloper(4).build(),
      new GameBuilder().fromDeveloper(1).build()
    ];
    let createdGames;

    beforeEach(async () => {
      createdGames = [];
      for (const game of games) {
        const created = await repo.create(game);
        createdGames.push(created);
      }
    });

    describe("when there are not games by the given developer", () => {
      it("returns an empty list", async () => {
        const found = await repo.listByDeveloper(5);
        expect(found).toEqual([]);
      });
    });

    describe("when there are no games by the given developer", () => {
      it("returns that list", async () => {
        const expected = [createdGames[0], createdGames[3]];
        const found = await repo.listByDeveloper(1);
        expect(found).toEqual(expected);
      });
    });
  });
});
