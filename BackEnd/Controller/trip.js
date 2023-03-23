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

//get all Trip
exports.getTripDetails = async (req, res) => {
    try {
        const trip = await Trip.find();
        res.send({ message: "success", trip });
    }
    catch (err) {
        res.status(400).send(err);
    }
};

//get one Trip
exports.getTrip = async (req, res) => {
    try {
        const trip = await Trip.findById(req.params.id);
        res.send({ message: "success", trip });
    }
    catch (err) {
        res.status(400).send(err);
    }
}

//get all trip by object uid
exports.getTripDetailsByUid = async (req, res) => {
    try {
        uid = req.body.uid;
        if (!uid) {
            return res.status(400).json({ message: "Please enter all fields" });
        }
        const trip = await Trip.find(
            { uid: uid }
        );
        res.send({ message: "success", trip: trip });
    }
    catch (err) {
        res.status(400).send(err);
    }
}

//update Trip
exports.updateTrip = async (req, res) => {
    try {
        const trip = await Trip.findByIdAndUpdate(req.params.id, req.body);
        res.send({ message: "success", trip });
    }
    catch (err) {
        res.status(400).send(err);
    }
}

//delete Trip
exports.deleteTrip = async (req, res) => {
    try {
        const trip = await Trip.findByIdAndDelete(req.params.id);
        res.send({ message: "success", trip });
    }
    catch (err) {
        res.status(400).send(err);
    }
}

exports.SearchTripsByName = async (req, res) => {
    try {
      const trip = await Trip.find({ destination: req.params.destination });
      res.send({ message: "success", trip });
    } catch (err) {
      res.status(400).send(err);
    }
  };
