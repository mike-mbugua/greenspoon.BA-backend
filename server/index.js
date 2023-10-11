const express = require("express");
const app = express();

const jwt = require("jsonwebtoken");

const mongoose = require("mongoose");
const db = require("../public/config/keys").MONGO_URI;

const dotenv = require("dotenv").config();
const port = process.env.PORT || 8000;

//connect to Mongo
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Mongo connected"))
  .catch((err) => console.log(err));

app.use("/", require("../public/routes/user"));

app.listen(port, () => {
  console.log(`Server running on port: ${port} ....`);
});
