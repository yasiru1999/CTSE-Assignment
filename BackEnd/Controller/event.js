const Event = require("../Model/Event");

exports.addEvent = async (req, res) => {
    try {
        const event = new Event(req.body)
        await event.save()
        res.send(event)
    } catch (error) {
        res.status(400).send(error.message);
    }
}

exports.editEvent = async (req, res) => {
    try {
        const { eid } = req.body
        const { obj } = req.body
        const event = await Event.findByIdAndUpdate(eid, obj)
        res.send(event)
    } catch (error) {
        res.status(400).send(error.message);
    }
}


exports.getAllEvent = async (req, res) => {
    try {

        const events = await Event.find()
        res.send(events)

    } catch (error) {
        res.status(400).send(error.message);
    }
}



exports.getMyEvents = async (req, res) => {
    try {
        const { uid } = req.body
        const events = await Event.find({ uid })
        res.send(events)
    } catch (error) {
        res.status(400).send(error.message);
    }
}


exports.deleteEvent = async (req, res) => {
    try {
        const { eid } = req.body
        await Event.findByIdAndDelete(eid)
        res.send("success")

    } catch (error) {
        res.status(400).send(error.message);
    }
}