const mongoose = require("mongoose");
var ObjectId = require("bson").ObjectId;
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    uid: { type: ObjectId, ref: "User" },
    content: { type: String }
});

const Comment = mongoose.model("comment", CommentSchema);

module.exports = Comment;
