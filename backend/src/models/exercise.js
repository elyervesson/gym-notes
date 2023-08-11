const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = Schema({
    name: {
        type: String,
        required: true
    },
    execution: {
        type: String,
        required: true
    },
    weight: {
        type: String,
        required: true
    },
    break: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    media: {
        type: [String],
        required: false
    },
    user:  {
        type: Schema.Types.ObjectId,
        required: true,
        default: new mongoose.Types.ObjectId('64b6f84feb0d288448efb20a') // mocked user01
    },
});

module.exports = Exercise = mongoose.model("exercise", exerciseSchema);