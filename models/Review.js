const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  customerID: { type: mongoose.Schema.Types.ObjectId, ref: "Customer" },
  movieId: { type: mongoose.Schema.Types.ObjectId, ref: "Movie" },
  theaterId: { type: mongoose.Schema.Types.ObjectId, ref: "Theater" },
  comment: {
    type: String,
    required: [true, "A review must have a feedback comment"],
  },
  rating: {
    type: Number,
    min: 0,
    max: 10,
    required: [true, "A review must have a rating"],
  },
});

module.exports = mongoose.model("Review", reviewSchema);
