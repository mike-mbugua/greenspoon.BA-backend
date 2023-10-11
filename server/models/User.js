const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: SVGAnimatedInteger,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password1: {
    type: String,
    required: true,
  },
  password2: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
