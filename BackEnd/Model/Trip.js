const mongoose = require("mongoose");
var ObjectId = require("bson").ObjectId;
const Schema = mongoose.Schema;

const tripSchema = new Schema({
    title: {
        type: String,
    },
    image: {
        type: String,
    },
    name: {
        type: String,
    },
    destination: {
        type: String,
    },
    status: {
        type: String,
    },
    dates: {
        type: String,
    },
    activities: {
        type: String,
    },
    budget: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    uid: {
        type: ObjectId,
        ref: "User"
    },
});

const Trip = mongoose.model("Trip", tripSchema);

module.exports = Trip;
