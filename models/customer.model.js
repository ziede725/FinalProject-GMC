const mongoose = require("mongoose");
const customerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  adress: {
    type: String,
  },
  town: {
    type: String,
  },
  city: {
    type: String,
  },
  zipCode: {
    type: Number,
    min: 4,
    max: 4,
  },
  preferences: {
    type: Array,
  },
  profilePhotoUrl: {
    type: String,
  },
  favourites: {
    type: Array,
  },
});

module.exports = mongoose.model("Customer", customerSchema);
