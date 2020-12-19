const Game = require("../../src/games/Game");
const crypto = require("crypto");

class GameBuilder {
  constructor() {
    this.id = undefined;
    this.name = crypto.randomBytes(20).toString("hex");
    this.coverArtUrl = "coverArt";
    this.developerId = 1;
  }

  fromDeveloper(id) {
    this.developerId = id;
    return this;
  }

  build() {
    return new Game({
      id: this.id,
      name: this.name,
      coverArtUrl: this.coverArtUrl,
      developerId: this.developerId
    });
  }
}

module.exports = GameBuilder;
