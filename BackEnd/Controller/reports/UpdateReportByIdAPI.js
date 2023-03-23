const Report = require('../../Model/Accommodationts/Accommodations');

const updateReportById = async (req, res) => {
  try {
    const report = await Report.findByIdAndUpdate(req.params.id, req.body);
    res.status(201).json({ status: true, data: report, message: "Successfully Updated" });
  } catch (err) {
    res.status(500).json({ status: false, error: err, message: "Update Failed" });
  }
}

module.exports = updateReportById;