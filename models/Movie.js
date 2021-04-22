const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  movieInfos: {
    poster_path: {
      type: String,
      required: [true, "Please provide a poster link/image"],
    },
    backdrop_path: {
      type: String,
      required: [true, "Please provide a backdrop link/image"],
    },
    adult: { type: Boolean, default: false, required: true },
    budget: String,
    genres: [{ type: mongoose.Schema.Types.ObjectId, ref: "Genre" }],
    orginial_language: String,
    original_title: {
      type: String,
      required: [true, "Movie must have an original title"],
    },
    overview: { type: String, required: [true, "Movie must have an overview"] },
    popularity: Number,
    release_date: Date,
    runtime: Number,
    status: {
      enum: ["Unplanned", "Planned", "Canceled"],
      default: "Unplanned",
    },
    tagline: String,
    title: String,
    trailer_url: String,
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
  },
  added_by: { type: mongoose.Schema.Types.ObjectId, ref: "Admin" },
});

module.exports = mongoose.model("Movie", movieSchema);
