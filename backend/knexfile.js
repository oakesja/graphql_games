module.exports = {
  development: {
    client: "pg",
    version: "13.1",
    connection: {
      host: "127.0.0.1",
      user: "postgres",
      password: "password",
      port: "3002",
      database: "games_dev"
    }
  },
  test: {
    client: "pg",
    version: "13.1",
    connection: {
      host: "127.0.0.1",
      user: "postgres",
      password: "password",
      port: "3003",
      database: "games_test"
    }
  }
};
