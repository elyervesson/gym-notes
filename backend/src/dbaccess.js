const mongoose = require("mongoose");

const user = "";
const pass = "";
const database = "gymnotesdb";
const serverName = "cluster0.qwqf0lw.mongodb.net";

module.exports = {
    init: () => {
      mongoose
        .connect(
          `mongodb+srv://${user}:${pass}@${serverName}/${database}?retryWrites=true&w=majority`,
          {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          }
        )
        .then((res) => console.log(`Connection Succesful ${res}`))
        .catch((err) => console.log(`Error in DB connection ${err}`));
    },
  };
  