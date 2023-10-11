const express = require("express");
const app = express();

const jwt = require("jsonwebtoken");
const path = require("path");

const mongoose = require("mongoose");

const MONGO_URI =
  "mongodb+srv://kamirimichael369:greenspoonba@greenspoon.rkjotcj.mongodb.net/test?retryWrites=true";

const db = MONGO_URI;

app.use(express.json());

const dotenv = require("dotenv").config();
const port = process.env.PORT || 8000;

//connect to Mongo
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Mongo connected"))
  .catch((err) => console.log(err));

app.use("/", require("../public/routes/user"));
app.use("/api/v1/events", require("../public/routes/eventRoute"));

app.listen(port, () => {
  console.log(`Server running on port: ${port} ....`);
});
