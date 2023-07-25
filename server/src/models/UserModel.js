const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  dni: {
    type: Number,
  },
  user: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: false,
  },
  tokenAuth: {
    type: String,
    required: false,
  },
  status: {
    type: Boolean,
    default: true,
  },
  image: {
    type: String,
    default:
      "https://res.cloudinary.com/dbt5vgimv/image/upload/v1689227244/CarGo/5034901-200_rujdfz.png",
  },
  type: {
    type: String,
    default: "User",
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
