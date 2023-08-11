const express = require("express");
const path = require("path");
const app = express();

const port = process.env.PORT || 3006;

app.use(express.json());

app.use(express.static("static"));

app.use("/", function(req, res) {
    res.sendFile(path.join(__dirname + "/static/index.html"));
});

app.listen(port, function () {
    console.log(`server listening on port ${port}`);
});
