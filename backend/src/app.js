const express = require("express");
const cors = require("cors")
const app = express();

// Parse json on body
app.use(express.json());
// Parse url on body
app.use(
  express.urlencoded({
    extended: true,
  })
);
// Enable All CORS Requests
app.use(cors())

const indexRouter = require("./routers/index");
const exerciseRouter = require("./routers/exercise");
const dayRouter = require("./routers/day");

app.use("/", indexRouter); // Add a full router with its methods (get, post and ...)
app.use("/:user/exercise", exerciseRouter); // Exercises of user-id = 64b6f84feb0d288448efb20a
app.use("/:user/day", dayRouter);

module.exports = app;
