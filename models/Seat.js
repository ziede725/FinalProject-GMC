const mongoose = require("mongoose");

const seatSchema = new mongoose.Schema({
  state: {
    enum: ["taken", "free", "unavailable"],
  },
});

module.exports = mongoose.model("Seat", seatSchema);
