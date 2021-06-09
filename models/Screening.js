const mongoose = require("mongoose");

const screeningSchema = new mongoose.Schema(
  {
    //Capacity ??? ref ??
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

    movieId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Movie",
      // required: true,
    },
    roomId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Room",
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
    discountId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Discount",
    },
    location: {type: String , required: true }
  },
  { timestamps: true }
);
const Screening = mongoose.model("Screening", screeningSchema);
module.exports = Screening;
