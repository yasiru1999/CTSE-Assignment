const mongoose = require('mongoose');
const ObjectId = require('bson').ObjectId;

const reportSchema = new mongoose.Schema({
  title: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  user: { type: ObjectId, ref: "User" },
  status: { type: Boolean, default: false },
  date: { type: String, required: true },
});

const reportModel = mongoose.model('Report', reportSchema);
module.exports = reportModel;