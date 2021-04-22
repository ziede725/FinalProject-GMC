const mongoose = require("mongoose");

const theaterSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Please provide a Theater name"] },
  userName: {
    type: String,
    unique: true,
    required: [true, "Please provide a user name"],
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
      "Please provide a valide phone number",
    ],
  },
  adress: { type: String },
  town: { type: String },
  city: { type: String },
  zipcode: { type: Number },
  rooms: [{ type: Schema.Types.ObjectId, ref: "Room" }],
  screenings: [{ type: Schema.Types.ObjectId, ref: "Screening" }],
});

module.exports = mongoose.model("Theater", theaterSchema);
