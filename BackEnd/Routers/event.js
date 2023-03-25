const { addEvent, getMyEvents, deleteEvent, editEvent, getAllEvent } = require("../Controller/event");

const router = require("express").Router();


router.post("/add", addEvent);
router.post("/add", addEvent);
router.post("/myevent", getMyEvents);
router.post("/del", deleteEvent);
router.post("/edit", editEvent)
router.get('/allevent', getAllEvent)


module.exports = router;
