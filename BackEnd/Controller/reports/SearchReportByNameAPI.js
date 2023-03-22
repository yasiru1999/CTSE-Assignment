const Report = require('../../Model/reports/Report');

const searchReportsByName = async (req, res) => {
  try {
    const reports = await Report.find({ title: { $regex: `${req.body.title}` } });
    if (!reports) res.status(200).json({ status: false, message: "No Data Found" });
    res.status(200).json({ status: true, data: reports, message: "Data Fetched Successfully" });
  } catch (err) {
    res.status(500).json({ status: false, error: err, message: "Data Fetch Failed." });
  }
}

module.exports = searchReportsByName;