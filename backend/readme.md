# GraphQL Games Backend

The core logic exposed through a GraphQL server

## Required Tools

- docker
- docker-compose
- node
- npm

## Starting Database

The tests and server for the backend require a postgres database running. For convenience docker is used for this. The database can be started with:

```
docker-compose up
```

## Running the Server

To setup postgres and seed data for the server:

```
npm run db:migrate
npm run db:seed
```

To run the server:

```
npm run start
```

## Tests

The tests also require a one time setup of database migrations. The migrations can be ran with:

```
NODE_ENV=test npm run db:migrate
```

After all setup has been complete, tests can be ran with:

```
npm run test
```
