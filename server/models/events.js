const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: true,
  },
  image: {
    type: String,
    // required: true,
  },
  people: {
    type: String,
    // required: true,
  },
  date: {
    type: Date,
    // required: true,
  },
  confirmed: {
    type: Boolean,
    // required: true,
  },
  type: {
    type: String,
  },
  description: {
    type: String,
  },
});

const Event = mongoose.model("Event", EventSchema);

module.exports = Event;
