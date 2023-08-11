const app = require("./app");
const db = require("./dbaccess");

db.init()

const port = process.env.PORT || 3005;

app.listen(port, function () {
    console.log(`app listening on port ${port}`);
})