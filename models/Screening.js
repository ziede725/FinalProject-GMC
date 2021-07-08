const mongoose = require("mongoose");

const screeningSchema = new mongoose.Schema(
  {
    //Capacity ??? ref ??
<<<<<<< HEAD
    date: { type: String, required: [true, "Screening must have a date"] },
  
    visibility: { type: String, required: true,default: "Private" },
    full: { type: Boolean, default: false, required: true },
    price: {
      type: String,
      required: [true, "Screening must have a price"],
    },
    sessionId:{
      type: mongoose.Schema.Types.ObjectId, 
      ref:'Session'
    },
=======
    date: { type: Date, required: [true, "Screening must have a date"] },
    startTime: {
      type: Date,
      required: [true, "Screening must have a start time"],
    },
    endTime: {
      type: Date,
      required: [true, "Screening must have an end time"],
    },
    published: { type: Boolean, default: false, required: true },
    full: { type: Boolean, default: false, required: true },
    price: {
      type: Number,
      required: [true, "Screening must have a price"],
    },
>>>>>>> 81af386bde675906ce730a684a8e43a906b340a7

    movieId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Movie",
<<<<<<< HEAD
      // required: true,
=======
      required: true,
>>>>>>> 81af386bde675906ce730a684a8e43a906b340a7
    },
    roomId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Room",
<<<<<<< HEAD
      // required: true,
    },
    theaterId:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Theater",
     
    },
    // seatsId:[{
    //   type: mongoose.Schema.Types.ObjectId, 
    //   ref: "Seat"
    // }]
    seats:[],
=======
      required: true,
    },
>>>>>>> 81af386bde675906ce730a684a8e43a906b340a7
    discountId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Discount",
    },
<<<<<<< HEAD
    location: {type: String , required: true }
=======
>>>>>>> 81af386bde675906ce730a684a8e43a906b340a7
  },
  { timestamps: true }
);
const Screening = mongoose.model("Screening", screeningSchema);
module.exports = Screening;
