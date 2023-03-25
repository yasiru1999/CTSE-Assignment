const mongoose = require("mongoose");
var ObjectId = require("bson").ObjectId;
const Schema = mongoose.Schema;

const tranportationSchema = new Schema({
    title: {
        type: String,
    },
    origin: {
        type: String,
    },
    destination: {
        type: String,
    },
    travelDates: {
        type: String,
    },
    typeOfTransportation: {
        type: String,
    },
    travelClass: {
        type: String,
    },
    date: {
        type: String,
    },
    Image: {
        type: String,
    },
    user: { 
        type: ObjectId, 
        ref: "User" 
    }
});

const Tranportation = mongoose.model("Tranportation", tranportationSchema);

module.exports = Tranportation;
