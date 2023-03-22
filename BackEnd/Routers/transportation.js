const router = require("express").Router();
const { addTransportation, getTransportationDetails, getTransportation, getTransportationDetailsByUid, updateTransportation, deleteTransportation } = require("../Controller/transportation");

router.post("/addTransportation", addTransportation);
router.get("/getTransportationDetails", getTransportationDetails);
router.get("/getTransportation/:id", getTransportation);
router.post("/getTransportationDetailsByUid", getTransportationDetailsByUid);
router.put("/updateTransportation/:id", updateTransportation);
router.delete("/deleteTransportation/:id", deleteTransportation);

module.exports = router;