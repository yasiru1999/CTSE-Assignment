const Trip = require('../Model/trip');

//add Trip
exports.addTrip = async (req, res) => {

    const { title, image, name, destination, status, activities, budget,dates, uid } = req.body;
    console.log(req.body);
    if (!image || !name || !destination || !status) {
        return res.status(400).json({ message: "Please enter all fields" });
    }
    const trip = new Trip({
        title,
        image,
        name,
        destination,
        status,
        activities,
        budget,
        dates,
        uid

    });
    try {
        const savedTrip = await trip.save();
        res.send({ message: "success", Trip: savedTrip });
    }
    catch (err) {
        res.status(400).send(err);
    }
};

