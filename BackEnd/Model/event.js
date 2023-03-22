const mongoose = require("mongoose");
var ObjectId = require("bson").ObjectId;
const Schema = mongoose.Schema;

const EventSchema = new Schema({
    title: {
        type: String,
    },
    date: {
        type: String,
    },


    venue: {
        type: String,
    },

    time: {
        type: String,
    },


    description: {
        type: String,
    },



    img: {
        type: String
    },

    uid: {
        type: ObjectId,
        ref: "User"
    },

});

const Event = mongoose.model("event", EventSchema);

module.exports = Event;
