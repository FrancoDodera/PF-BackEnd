const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

  email:{
    type: String,
    required:true,
    unique:true
  },
  name: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  dni: {
    type: Number,
    required:false,
    unique:false
  },
  user: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  status:{
    type: Boolean,
    default: true
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;