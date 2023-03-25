const Transportation = require('../Model/transportation');

//add new Transportation
exports.addTransportation = async (req, res) => {
  try {
    const transportation = new Transportation(req.body);
    await transportation.save();
    res.status(201).json({ status: true, data: transportation, message: "Successfully Created" });
  } catch (err) {
    res.status(500).json({ status: false, error: err, message: "Transportation Creating Failed." });
  }
};

exports.deleteTransportationById = async (req, res) => {
  try {
    const transportation = await Transportation.findByIdAndDelete(req.params.id);
    res.status(200).json({ status: true, data: transportation, message: "Successfully Deleted" });
  } catch (err) {
    res.status(500).json({ status: false, error: err, message: "Delete Failed" });
  }
};

exports.getAllTransportations = async (req, res) => {
  try {
    const transportation = await Transportation.find();
    if (!transportation) res.status(200).json({ status: false, message: "No Data Found" });

    res.status(200).json({ status: true, data: transportation, message: "Data Fetched Successfully" });
  } catch (err) {
    res.status(500).json({ status: false, error: err, message: "Data Fetch Failed." });
  }
};

exports.getAllTransportationsByUserId = async (req, res) => {
  try {
    const transportation = await Transportation.find({ user: req.params.id });
    if (!transportation) res.status(200).json({ status: false, message: "No Data Found" });
    res.status(200).json({ status: true, data: transportation, message: "Data Fetched Successfully" });
  } catch (err) {
    res.status(500).json({ status: false, error: err, message: "Data Fetch Failed." });
  }
};

exports.getTransportationById = async (req, res) => {
  try {
    const transportation = await Transportation.findById(req.params.id);
    if (!transportation) res.status(200).json({ status: false, message: "Data not Found" });
    res.status(200).json({ status: true, data: transportation, message: "Data Fetched Successfully" });
  } catch (err) {
    res.status(500).json({ status: false, error: err, message: "Data Fetch Failed" });
  }
};

exports.searchTransportationsByName = async (req, res) => {
  try {
    const transportation = await Transportation.find({ name: { $regex: `${req.body.name}` } });
    if (!transportation) res.status(200).json({ status: false, message: "No Data Found" });
    res.status(200).json({ status: true, data: transportation, message: "Data Fetched Successfully" });
  } catch (err) {
    res.status(500).json({ status: false, error: err, message: "Data Fetch Failed." });
  }
};

exports.searchTransportationsByNameAndUserId = async (req, res) => {
  try {
    const transportation = await Transportation.find({ name: { $regex: `${req.body.name}` }, user: req.body.user });
    if (!transportation) res.status(200).json({ status: false, message: "No Data Found" });
    res.status(200).json({ status: true, data: transportation, message: "Data not Fetched Successfully" });
  } catch (err) {
    res.status(500).json({ status: false, error: err, message: "Data Fetch Failed." });
  }
};

exports.updateTransportationById = async (req, res) => {
  try {
    const transportation = await Transportation.findByIdAndUpdate(req.params.id, req.body);
    res.status(201).json({ status: true, data: transportation, message: "Successfully Updated" });
  } catch (err) {
    res.status(500).json({ status: false, error: err, message: "Update Failed" });
  }
};

exports.updateTransportationStatusById = async (req, res) => {
  try {
    const transportation = await Transportation.findByIdAndUpdate(req.params.id, req.body);
    res.status(201).json({ status: true, data: transportation, message: "Status Updated Successfully" });
  } catch (err) {
    res.status(500).json({ status: false, error: err, message: "accommodation Status update Failed" });
  }
};