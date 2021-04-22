const mongoose = require("mongoose");

const seatSchema = new mongoose.Schema({
  state: {
    enum: ["taken", "free", "unavailable"],
  },
  seatNumber: {
    type: Number,
    required: [true, "Seat must have a number"],
  },
  seatRow: {
    type: String,
    required: [true, "Seat must have a row property"],
  },
  seatColumn: {
    type: String,
    required: [true, "Seat must have a column property"],
  },
});

module.exports = mongoose.model("Seat", seatSchema);
