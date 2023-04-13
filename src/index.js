//* Requirement dependencies
const express = require("express");
const cors = require("cors");
const errorHandling = require("./helper/errorHandling");
const userRouter = require("./api/router/userRouter");
const sneakerRouting = require("./api/router/sneakerRouter");
require("dotenv").config();

const server = express();

//* Services
server.use(express.json());
server.use(cors());

server.use("/user", userRouter);
server.use("/sneaker", sneakerRouting);

server.use(errorHandling);

//* Server listen on port
const port = process.env.PORT;
server.listen(port, () => {
  console.log("Server listening on " + port);
});
