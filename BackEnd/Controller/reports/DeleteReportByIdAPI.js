const Report = require('../../Model/reports/Report');

const deleteReportById = async (req, res) => {
  try {
    const report = await Report.findByIdAndDelete(req.params.id);
    res.status(200).json({ status: true, data: report, message: "Successfully Deleted" });
  } catch (err) {
    res.status(500).json({ status: false, error: err, message: "Delete Failed" });
  }
}

module.exports = deleteReportById;