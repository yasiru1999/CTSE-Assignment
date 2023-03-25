const router = require('express').Router();
const { addTransportation,
        deleteTransportationById, 
        getAllTransportations, 
        getAllTransportationsByUserId, 
        getTransportationById, 
        searchTransportationsByName,
        searchTransportationsByNameAndUserId,
        updateTransportationById,
        updateTransportationStatusById } = require("../Controller/transportation");

router.post('/addTransportation', addTransportation);
router.delete('/deleteTransportationById/:id', deleteTransportationById);
router.get('/getAllTransportations', getAllTransportations);
router.get('/getAllTransportationsByUserId/:id', getAllTransportationsByUserId);
router.get('/getTransportationById/:id', getTransportationById);
router.put('/updateTransportationById/:id', updateTransportationById);
router.put('/updateTransportationStatusById/:id', updateTransportationStatusById);
router.post('/searchTransportationsByName', searchTransportationsByName);
router.post('/searchTransportationsByNameAndUserId', searchTransportationsByNameAndUserId);

module.exports = router;