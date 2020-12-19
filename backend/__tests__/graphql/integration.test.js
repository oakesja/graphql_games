const { gql } = require("apollo-server-express");
const { createTestClient } = require("apollo-server-testing");
const DeveloperPostgresRepository = require("../../src/developers/DeveloperPostgresRepository");
const GamePostgresRepository = require("../../src/games/GamePostgresRepository");
const server = require("../../src/graphql/server");
const DeveloperBuilder = require("../helpers/DeveloperBuilder");
const GameBuilder = require("../helpers/GameBuilder");

const { query } = createTestClient(server);

describe("Integration Tests", () => {
  const gamesRepo = new GamePostgresRepository();
  const developersRepo = new DeveloperPostgresRepository();

  describe("games", () => {
    const GAMES = gql`
      query {
        games {
          id
          name
        }
      }
    `;
    let games;

    beforeEach(async () => {
      games = [];
      for (let i = 0; i < 3; i++) {
        const toCreate = new GameBuilder().build();
        const created = await gamesRepo.create(toCreate);
        games.push(created);
      }
    });

    it("returns all the games", async () => {
      const response = await query({ query: GAMES });
      const expected = games.map(game => {
        return { id: game.id, name: game.name };
      });
      expect(response.data.games).toEqual(expected);
    });
  });

  describe("gamesByDeveloper", () => {
    const GAMES_BY_DEV = gql`
      query($developerId: Int!) {
        gamesByDeveloper(developerId: $developerId) {
          name
        }
      }
    `;

    const games = [
      new GameBuilder().fromDeveloper(1).build(),
      new GameBuilder().fromDeveloper(1).build(),
      new GameBuilder().fromDeveloper(3).build(),
      new GameBuilder().fromDeveloper(4).build()
    ];

    beforeEach(async () => {
      for (const game of games) {
        await gamesRepo.create(game);
      }
    });

    it("returns all the games by a certain developer", async () => {
      const response = await query({
        query: GAMES_BY_DEV,
        variables: { developerId: 1 }
      });
      const expectedGames = games.slice(0, 2);
      const expected = expectedGames.map(game => {
        return { name: game.name };
      });
      expect(response.data.gamesByDeveloper).toEqual(expected);
    });
  });

  describe("game", () => {
    const GAME = gql`
      query($id: Int!) {
        game(id: $id) {
          name
        }
      }
    `;

    let game;

    beforeEach(async () => {
      game = await gamesRepo.create(new GameBuilder().build());
    });

    describe("when a game exists", () => {
      it("returns the game", async () => {
        const response = await query({
          query: GAME,
          variables: { id: game.id }
        });
        expect(response.data.game).toEqual({ name: game.name });
      });
    });

    describe("when a game does not exist", () => {
      it("returns null", async () => {
        const response = await query({
          query: GAME,
          variables: { id: -1 }
        });
        expect(response.data.game).toEqual(null);
      });
    });
  });

  describe("relationships", () => {
    const GAME = gql`
      query($id: Int!) {
        game(id: $id) {
          name
          developer {
            name
          }
        }
      }
    `;
    let developer;
    let game;

    beforeEach(async () => {
      developer = new DeveloperBuilder().build();
      developer = await developersRepo.create(developer);
      game = new GameBuilder().fromDeveloper(developer.id).build();
      game = await gamesRepo.create(game);
    });

    test("games are from a developer", async () => {
      const response = await query({
        query: GAME,
        variables: { id: game.id }
      });
      const expected = {
        name: game.name,
        developer: {
          name: developer.name
        }
      };
      expect(response.data.game).toEqual(expected);
    });
  });
});
