const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please provide a first name"],
  },
  lastName: {
    type: String,
    required: [true, "Please provide a last name"],
  },
  userName: {
    type: String,
    required: [true, "Please provide a  username"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: true,
    match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Please provide a valid email"],
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minLength: 6,
    select: false,
  },
  resetPasswordToek: String,
  resetPasswordExpire: Date,
  phoneNumber: {
    type: String,
    match: [
      /((\+|00)216)?([2579][0-9]{7}|(3[012]|4[01]|8[0128])[0-9]{6}|42[16][0-9]{5})/,
      "Please provide a valid phone number",
    ],
  },
  adress: { type: String },
  town: { type: String },
  city: { type: String },
  reservations: [{ type: mongoose.Schema.Types.ObjectId, ref: "Reservation" }],
  preferences: {
    location: { type: String, default: "Tunis", required: true },
    genres: [{ type: mongoose.Schema.Types.ObjectId, ref: "Genre" }],
  },
  favourites: [{ type: mongoose.Schema.types.ObjectId, ref: "Movie" }],
});

//Methods bcrypt hash password, compare password ..

module.exports = mongoose.model("Customer", customerSchema);
