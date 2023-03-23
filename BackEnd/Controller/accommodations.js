const Accommodations = require('../Model/Accommodations');

//add new Accommodation
exports.addAccommodations = async (req, res) => {
  try {
    const accommodation = new Accommodations(req.body);
    await accommodation.save();
    res.status(201).json({ status: true, data: accommodation, message: "Successfully Created" });
  } catch (err) {
    res.status(500).json({ status: false, error: err, message: "Report Creating Failed." });
  }
};

exports.deleteAccommodationById = async (req, res) => {
  try {
    const accommodation = await Accommodations.findByIdAndDelete(req.params.id);
    res.status(200).json({ status: true, data: accommodation, message: "Successfully Deleted" });
  } catch (err) {
    res.status(500).json({ status: false, error: err, message: "Delete Failed" });
  }
};

exports.getAllAccommodations = async (req, res) => {
  try {
    const accommodations = await Accommodations.find();
    if (!accommodations) res.status(200).json({ status: false, message: "No Data Found" });

    res.status(200).json({ status: true, data: accommodations, message: "Data Fetched Successfully" });
  } catch (err) {
    res.status(500).json({ status: false, error: err, message: "Data Fetch Failed." });
  }
};

exports.getAllAccommodationsByUserId = async (req, res) => {
  try {
    const accommodations = await Accommodations.find({ user: req.params.id });
    if (!accommodations) res.status(200).json({ status: false, message: "No Data Found" });
    res.status(200).json({ status: true, data: accommodations, message: "Data Fetched Successfully" });
  } catch (err) {
    res.status(500).json({ status: false, error: err, message: "Data Fetch Failed." });
  }
};

exports.getAccommodationById = async (req, res) => {
  try {
    const accommodation = await Accommodations.findById(req.params.id);
    if (!accommodation) res.status(200).json({ status: false, message: "Data not Found" });
    res.status(200).json({ status: true, data: accommodation, message: "Data Fetched Successfully" });
  } catch (err) {
    res.status(500).json({ status: false, error: err, message: "Data Fetch Failed" });
  }
};

exports.searchAccommodationsByName = async (req, res) => {
  try {
    const accommodations = await Accommodations.find({ title: { $regex: `${req.body.name}` } });
    if (!accommodations) res.status(200).json({ status: false, message: "No Data Found" });
    res.status(200).json({ status: true, data: accommodations, message: "Data Fetched Successfully" });
  } catch (err) {
    res.status(500).json({ status: false, error: err, message: "Data Fetch Failed." });
  }
};

exports.searchAccommodationsByNameAndUserId = async (req, res) => {
  try {
    const accommodations = await Accommodations.find({ title: { $regex: `${req.body.name}` }, user: req.body.user });
    if (!accommodations) res.status(200).json({ status: false, message: "No Data Found" });
    res.status(200).json({ status: true, data: accommodations, message: "Data Fetched Successfully" });
  } catch (err) {
    res.status(500).json({ status: false, error: err, message: "Data Fetch Failed." });
  }
};

exports.updateAccommodationById = async (req, res) => {
  try {
    const accommodation = await Accommodations.findByIdAndUpdate(req.params.id, req.body);
    res.status(201).json({ status: true, data: accommodation, message: "Successfully Updated" });
  } catch (err) {
    res.status(500).json({ status: false, error: err, message: "Update Failed" });
  }
};

exports.updateAccommodationStatusById = async (req, res) => {
  try {
    const accommodation = await Accommodations.findByIdAndUpdate(req.params.id, req.body);
    res.status(201).json({ status: true, data: accommodation, message: "Status Updated Successfully" });
  } catch (err) {
    res.status(500).json({ status: false, error: err, message: "accommodation Status update Failed" });
  }
};