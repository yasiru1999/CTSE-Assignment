const router = require('express').Router();
const { addAccommodations,
        deleteAccommodationById, 
        getAllAccommodations, 
        getAllAccommodationsByUserId, 
        getAccommodationById, 
        searchAccommodationsByName,
        searchAccommodationsByNameAndUserId,
        updateAccommodationById,
        updateAccommodationStatusById } = require("../Controller/accommodations");

router.post('/create', addAccommodations);
router.delete('/delete/:id', deleteAccommodationById);
router.get('/get/all', getAllAccommodations);
router.get('/get/user/:id', getAllAccommodationsByUserId);
router.get('/get/report/:id', getAccommodationById);
router.put('/update/report/:id', updateAccommodationById);
router.put('/update/status/:id', updateAccommodationStatusById);
router.post('/search', searchAccommodationsByName);
router.post('/search/user', searchAccommodationsByNameAndUserId);

module.exports = router;