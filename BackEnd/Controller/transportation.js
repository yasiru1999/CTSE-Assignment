const Transportation = require('../Model/transportation');

//add Transportation
exports.addTransportation = async (req, res) => {

    const { title, origin, destination, travelDates, typeOfTransportation, travelClass, date, uid } = req.body;
    console.log(req.body);
    if (!title || !origin || !destination || !travelDatess) {
        return res.status(400).json({ message: "Please enter all fields" });
    }
    const transportation = new Transportation({
        title, 
        origin, 
        destination, 
        travelDates, 
        typeOfTransportation, 
        travelClass, 
        date, 
        uid

    });
    try {
        const savedTransportation = await transportation.save();
        res.send({ message: "success", Transportation: savedTransportation });
    }
    catch (err) {
        res.status(400).send(err);
    }
};

//get all Transportation
exports.getTransportationDetails = async (req, res) => {
    try {
        const transportation = await Transportation.find();
        res.send({ message: "success", transportation });
    }
    catch (err) {
        res.status(400).send(err);
    }
};

//get one Transportation
exports.getTransportation = async (req, res) => {
    try {
        const transportation = await Transportation.findById(req.params.id);
        res.send({ message: "success", transportation });
    }
    catch (err) {
        res.status(400).send(err);
    }
}

//get all Transportation by object uid
exports.getTransportationDetailsByUid = async (req, res) => {
    try {
        uid = req.body.uid;
        if (!uid) {
            return res.status(400).json({ message: "Please enter all fields" });
        }
        const transportation = await Transportation.find(
            { uid: uid }
        );
        res.send({ message: "success", transportation: transportation });
    }
    catch (err) {
        res.status(400).send(err);
    }
}

//update Transportation
exports.updateTransportation = async (req, res) => {
    try {
        const transportation = await Transportation.findByIdAndUpdate(req.params.id, req.body);
        res.send({ message: "success", transportation });
    }
    catch (err) {
        res.status(400).send(err);
    }
}

//delete transportation
exports.deleteTransportation = async (req, res) => {
    try {
        const transportation = await Transportation.findByIdAndDelete(req.params.id);
        res.send({ message: "success", transportation });
    }
    catch (err) {
        res.status(400).send(err);
    }
}
