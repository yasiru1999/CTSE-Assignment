const mongoose = require('mongoose');
const ObjectId = require('bson').ObjectId;

const accommodationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  user: { type: ObjectId, ref: "User" },
  status: { type: Boolean, default: false },
  date: { type: String, required: true },
});

const accommodationModel = mongoose.model('Accommodations', accommodationSchema);
module.exports = accommodationModel;