const router = require('express').Router();
const AddReport = require('../../Controller/reports/AddReportAPI');
const DeleteReportById = require('../../Controller/reports/DeleteReportByIdAPI');
const GetAllReports = require('../../Controller/reports/GetAllReportsAPI');
const GetAllReportsByUserId = require('../../Controller/reports/GetAllReportsByUserIdAPI');
const GetReportById = require('../../Controller/reports/GetReportByIdAPI');
const SearchReportsByName = require('../../Controller/reports/SearchReportByNameAPI');
const UpdateReportById = require('../../Controller/reports/UpdateReportByIdAPI');
const UpdateReportStatusById = require('../../Controller/reports/UpdateReportStatusByIdAPI');
const SearchReportsByNameAndUserId = require('../../Controller/reports/SearchReportsByNameAndUserId');


router.post('/create', AddReport);
router.delete('/delete/:id', DeleteReportById);
router.get('/get/all', GetAllReports);
router.get('/get/user/:id', GetAllReportsByUserId);
router.get('/get/report/:id', GetReportById);
router.put('/update/report/:id', UpdateReportById);
router.put('/update/status/:id', UpdateReportStatusById);
router.post('/search', SearchReportsByName);
router.post('/search/user', SearchReportsByNameAndUserId);

module.exports = router;