const { gql } = require("apollo-server-express");

module.exports = gql`
  type Game {
    id: Int!
    name: String!
    coverArtUrl: String!
    developer: Developer!
  }

  type Developer {
    id: Int!
    name: String!
    foundedDate: String!
    logoUrl: String!
  }

  type Query {
    games: [Game!]!
    gamesByDeveloper(developerId: Int!): [Game!]!
    game(id: Int!): Game
  }
`;
