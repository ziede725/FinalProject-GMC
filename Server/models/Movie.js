const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  
    poster_path: {
      type: String,
      // required: [true, "Please provide a poster link/image"],
    },
    genres: [{ type: mongoose.Schema.Types.ObjectId, ref: "Genre" }],
    language: {type : String },
    Overview: { type: String, required: [true, "Movie must have an overview"] },
    popularity: {type : Number},
    release_date: {type : Date},
    runtime: {type : Number},
    title: {type:String},
    trailer_url: {type: String},
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
 
  added_by: { type: mongoose.Schema.Types.ObjectId, ref: "Admin" },
});

const Movie =mongoose.model("Movie", movieSchema);
module.exports= Movie ; 
