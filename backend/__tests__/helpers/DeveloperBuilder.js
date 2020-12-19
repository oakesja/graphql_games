const crypto = require("crypto");
const Developer = require("../../src/developers/developer");

class DeveloperBuilder {
  constructor() {
    this.id = undefined;
    this.name = crypto.randomBytes(20).toString("hex");
    this.foundedDate = new Date().toISOString();
    this.logoUrl = "logo";
  }

  build() {
    return new Developer({
      id: this.id,
      name: this.name,
      foundedDate: this.foundedDate,
      logoUrl: this.logoUrl
    });
  }
}

module.exports = DeveloperBuilder;
