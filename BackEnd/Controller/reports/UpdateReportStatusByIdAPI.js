const Report = require('../../Model/reports/Report');

const updateReportStatusById = async (req, res) => {
  try {
    const report = await Report.findByIdAndUpdate(req.params.id, req.body);
    res.status(201).json({ status: true, data: report, message: "Status Updated Successfully" });
  } catch (err) {
    res.status(500).json({ status: false, error: err, message: "Report Status update Failed" });
  }
}

module.exports = updateReportStatusById;