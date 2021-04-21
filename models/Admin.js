const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  
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
      phoneNumber: {
        type: String,
        match: [
          /((\+|00)216)?([2579][0-9]{7}|(3[012]|4[01]|8[0128])[0-9]{6}|42[16][0-9]{5})/,
          "Please provide a valide phone number",
        ],
      },
     
});

module.exports = mongoose.model("Admin", adminSchema);
