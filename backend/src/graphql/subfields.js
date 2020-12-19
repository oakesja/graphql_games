const DeveloperPostgresRepository = require("../developers/DeveloperPostgresRepository");
const DataLoader = require("dataloader");

const developersRepo = new DeveloperPostgresRepository();
const developerLoader = new DataLoader(ids => developersRepo.findByIds(ids));

module.exports = {
  Game: {
    developer: game => developerLoader.load(game.developerId)
  }
};
