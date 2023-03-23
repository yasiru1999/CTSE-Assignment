const router = require("express").Router();
const { addTrip, getTripDetails, getTrip, getTripDetailsByUid, updateTrip, deleteTrip ,SearchTripsByName} = require("../Controller/trip");

router.post("/addTrip", addTrip);
router.get("/getTripDetails", getTripDetails);
router.get("/getTrip/:id", getTrip);
router.post("/getTripDetailsByUid", getTripDetailsByUid);
router.put("/updateTrip/:id", updateTrip);
router.delete("/deleteTrip/:id", deleteTrip);
router.get("/search/:destination", SearchTripsByName);

module.exports = router;