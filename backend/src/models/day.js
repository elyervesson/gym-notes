const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const daySchema = Schema({
    exercises:  {
        type: [Schema.Types.ObjectId],
        required: false
    },
    position: {
        type: Date,
        default: Date.now()
    },
});

module.exports = Day = mongoose.model("day", daySchema);