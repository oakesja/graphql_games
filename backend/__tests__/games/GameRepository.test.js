const GamePostgresRepository = require("../../src/games/GamePostgresRepository");
const Game = require("../../src/games/Game");
const crypto = require("crypto");
const { itBehavesLikeARepository } = require("../helpers/repositoryTestUtils");

describe("GameRepository", () => {
  const repo = new GamePostgresRepository();

  function buildEntity() {
    return new Game({
      name: crypto.randomBytes(20).toString("hex"),
      coverArtUrl: "art",
      developerId: 1
    });
  }

  itBehavesLikeARepository(repo, buildEntity);
});
