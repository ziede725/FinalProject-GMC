
<<<<<<< HEAD
const mongoose = require("mongoose");

=======
>>>>>>> 81af386bde675906ce730a684a8e43a906b340a7
const seatSchema = new mongoose.Schema(
  {
    state: {
      type: String,
      enum: ["taken", "free", "unavailable"],
      default: "free",
    },
<<<<<<< HEAD
    // seatNumber: {
    //   type: Number,
    //   required: [true, "Seat must have a number"],
    // },
    // seatRow: {
    //   type: String,
    //   required: [true, "Seat must have a row property"],
    // },
    // seatColumn: {
    //   type: String,
    //   required: [true, "Seat must have a column property"],
    // },
    // screeningId: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Screening",
    //   required: [true, "Seat must be assigned to a specific screening"],
    },
    // reservationId:{
    //   type : mongoose.Schema.Types.ObjectId, 
    //   ref:"Reservation"
    // }
  // },
  
=======
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
    roomId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Room",
      required: [true, "Seat must be assigned to a specific room"],
    },
  },
  { timestamps: true }
>>>>>>> 81af386bde675906ce730a684a8e43a906b340a7
);
const Seat = mongoose.model("Seat", seatSchema);
module.exports = Seat;
