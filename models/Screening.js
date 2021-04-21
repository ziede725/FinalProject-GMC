const mongoose = require("mongoose");

const screeningSchema = new mongoose.Schema({
  //Capacity ??? ref ??
  date: { type: Date },
  startTime: {},
  endTime: {},
  published: { type: Boolean },
  full: { type: Boolean },
  price: { type: Number },

  movieId: { type: Schema.Types.ObjectId, ref: "Movie" },
  roomId: { type: Schema.Types.ObjectId, ref: "Room" },
  discountId: { type: Schema.Types.ObjectId, ref: "Discount" },
});

module.exports = mongoose.model("Screening", screeningSchema);
