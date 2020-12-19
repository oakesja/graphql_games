# Graphql Games Backend

The core logic exposed through a GraphQL server

## Required Tools

- docker
- docker-compose
- node
- npm

## Running the Server

```
npm run start
```

## Tests

The tests for the backend require a postgres database running. For convenience docker is used for this. The database can be started with:

```
docker-compose up
```

The tests also require a one time setup of database migrations. The migrations can be ran with:

```
NODE_ENV=test npm run db:migrate
```

After all setup has been complete, tests can be ran with:

```
npm run test
```
