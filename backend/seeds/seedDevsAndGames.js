const Developer = require("../src/developers/developer");
const Game = require("../src/games/game");

const developers = [
  new Developer({
    id: 1,
    name: "Bioware",
    foundedDate: new Date("2/1/1995").toISOString(),
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/BioWare_2018.svg/2880px-BioWare_2018.svg.png"
  }),
  new Developer({
    id: 2,
    name: "Respawn Entertainment",
    foundedDate: new Date("4/12/2010").toISOString(),
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/b/be/Respawn_Logo.png"
  }),
  new Developer({
    id: 3,
    name: "Remedy Entertainment",
    foundedDate: new Date("8/18/1995").toISOString(),
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/en/e/ea/Remedy_Entertainment_logo.svg"
  })
];

const games = [
  new Game({
    name: "Star Wars: Knights of the Old Republic",
    coverArtUrl: "https://upload.wikimedia.org/wikipedia/en/1/11/Kotorbox.jpg",
    developerId: 1
  }),
  new Game({
    name: "Jade Empire",
    coverArtUrl:
      "https://upload.wikimedia.org/wikipedia/en/a/ae/Jade_Empire_Coverart.png",
    developerId: 1
  }),
  new Game({
    name: "Mass Effect",
    coverArtUrl:
      "https://upload.wikimedia.org/wikipedia/en/e/e8/MassEffect.jpg",
    developerId: 1
  }),
  new Game({
    name: "Dragon Age: Orgins",
    coverArtUrl:
      "https://en.wikipedia.org/wiki/Dragon_Age:_Origins#/media/File:Dragon_Age_Origins_cover.png",
    developerId: 1
  }),
  new Game({
    name: "Titanfall",
    coverArtUrl:
      "https://upload.wikimedia.org/wikipedia/en/8/84/Titanfall_box_art.jpg",
    developerId: 2
  }),
  new Game({
    name: "Titanfall 2",
    coverArtUrl:
      "https://upload.wikimedia.org/wikipedia/en/1/13/Titanfall_2.jpg",
    developerId: 2
  }),
  new Game({
    name: "Apex Legends",
    coverArtUrl:
      "https://upload.wikimedia.org/wikipedia/en/d/db/Apex_legends_cover.jpg",
    developerId: 2
  }),
  new Game({
    name: "Star Wars Jedi: Fallen Order",
    coverArtUrl:
      "https://upload.wikimedia.org/wikipedia/en/1/13/Cover_art_of_Star_Wars_Jedi_Fallen_Order.jpg",
    developerId: 2
  }),
  new Game({
    name: "Alan Wake",
    coverArtUrl:
      "https://upload.wikimedia.org/wikipedia/en/1/1f/Alan_Wake_Game_Cover.jpg",
    developerId: 3
  }),
  new Game({
    name: "Quantum Break",
    coverArtUrl:
      "https://upload.wikimedia.org/wikipedia/en/d/d9/Quantum_Break_cover.jpg",
    developerId: 3
  }),
  new Game({
    name: "Control",
    coverArtUrl:
      "https://upload.wikimedia.org/wikipedia/en/6/6a/D1IOd0BWsAAiX5T.jpg",
    developerId: 3
  })
];

exports.seed = async function (knex) {
  await knex("developers").del();
  await knex("games").del();
  await knex("developers").insert(developers);
  await knex("games").insert(games);
};
