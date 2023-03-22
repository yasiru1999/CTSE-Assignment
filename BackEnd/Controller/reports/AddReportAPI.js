const Report = require('../../Model/reports/Report');

const addReport = async (req, res) => {
  try {
    const report = new Report(req.body);
    await report.save();
    res.status(201).json({ status: true, data: report, message: "Successfully Created" });
  } catch (err) {
    res.status(500).json({ status: false, error: err, message: "Report Creating Failed." });
  }
}

module.exports = addReport;