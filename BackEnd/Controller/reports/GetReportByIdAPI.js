const Report = require('../../Model/reports/Report');

const getReportById = async (req, res) => {
  try {
    const report = await Report.findById(req.params.id);
    if (!report) res.status(200).json({ status: false, message: "Data not Found" });
    res.status(200).json({ status: true, data: report, message: "Data Fetched Successfully" });
  } catch (err) {
    res.status(500).json({ status: false, error: err, message: "Data Fetch Failed" });
  }
}

module.exports = getReportById;