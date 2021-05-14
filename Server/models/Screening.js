const mongoose = require("mongoose");

const screeningSchema = new mongoose.Schema(
  {
    //Capacity ??? ref ??
    date: { type: Date, required: [true, "Screening must have a date"] },
    startTime: {
      type: String,
      required: [true, "Screening must have a start time"],
    },
    endTime: {
      type: String,
      required: [true, "Screening must have an end time"],
    },
    published: { type: String, required: true },
    full: { type: Boolean, default: false, required: true },
    price: {
      type: String,
      required: [true, "Screening must have a price"],
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
    discountId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Discount",
    },
  },
  { timestamps: true }
);
const Screening = mongoose.model("Screening", screeningSchema);
module.exports = Screening;
