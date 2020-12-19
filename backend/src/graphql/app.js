const express = require("express");
const server = require("./server");

const PORT = 3001;
const app = express();

server.applyMiddleware({ app });
app.listen({ port: PORT }, () =>
  console.log(
    `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
  )
);
