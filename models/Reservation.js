const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({
  screeningId: { type: String, required: true },
  seatIds: { type: String, required: true },
  customerId: { type: String, required: true },
  reservationNumber: { type: String, required: true },
  creationDate: { type: Date },
});

module.exports = mongoose.model("Customer", customerSchema);
