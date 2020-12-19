const DeveloperPostgresRepository = require("../../src/developers/DeveloperPostgresRepository");
const DeveloperBuilder = require("../helpers/DeveloperBuilder");
const { itBehavesLikeARepository } = require("../helpers/repositoryTestUtils");

describe("DeveloperRepository", () => {
  const repo = new DeveloperPostgresRepository();

  function buildEntity() {
    return new DeveloperBuilder().build();
  }

  itBehavesLikeARepository(repo, buildEntity);
});
