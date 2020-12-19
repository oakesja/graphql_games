const DeveloperPostgresRepository = require("../../src/developers/DeveloperPostgresRepository");
const Developer = require("../../src/developers/Developer");
const crypto = require("crypto");
const { itBehavesLikeARepository } = require("../helpers/repositoryTestUtils");

describe("DeveloperRepository", () => {
  const repo = new DeveloperPostgresRepository();

  function buildEntity() {
    return new Developer({
      name: crypto.randomBytes(20).toString("hex"),
      foundedDate: new Date().toISOString(),
      logoUrl: "logo"
    });
  }

  itBehavesLikeARepository(repo, buildEntity);
});
