const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./schema");
const queries = require("./queries");
const subfields = require("./subfields");

const resolvers = {
  Query: queries,
  ...subfields
};

const server = new ApolloServer({ typeDefs, resolvers });

module.exports = server;
