require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 8000;
const URL = process.env.MONGODB_URL;
const cors = require("cors");

const userRouter = require("./Routers/user");
const tripRouter = require("./Routers/trip");
const transportationRouter = require("./Routers/transportation");



app.use(cors());
app.use(express.json());

//! connect to mongoDB
mongoose.connect(URL, (err) => {
  if (err) throw err;
  console.log("connected to MongoDB");
});

app.use("/api/user", userRouter); //user login & Registration
app.use("/api/trip", tripRouter); //trip
app.use("/api/transportation", transportationRouter);

//! create server with port number
app.listen(process.env.PORT || "0.0.0.0", () => {
  console.log(`service is up and running on port ${PORT}`);
});

module.exports = app;
