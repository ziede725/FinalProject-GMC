const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({
  screeningId: {type: Schema.Types.ObjectId, ref:'Screening'},
  seatIds: {type: Schema.Types.ObjectId, ref:'Seat'},
  customerId: {type: Schema.Types.ObjectId, ref:'Customer'},
  reservationNumber: { type: String, required: true },
  creationDate: { type: Date },
});

module.exports = mongoose.model("Reservation", reservationSchema);
