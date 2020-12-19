class Game {
  constructor({ id, name, coverArtUrl, developerId }) {
    this.id = id;
    this.name = name;
    this.coverArtUrl = coverArtUrl;
    this.developerId = developerId;
  }
}

module.exports = Game;
