const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  
    img: {
      type: String,
      // required: [true, "Please provide a poster link/image"],
    },
<<<<<<< HEAD
    genres: [{ type: mongoose.Schema.Types.ObjectId, ref: "Genre" }],
    Language: {type : String },
    Overview: { type: String, required: [true, "Movie must have an overview"] },
    popularity: {type : Number},
    date: {type : Date},
    runTime: {type : String},
    title: {type:String},
    trailerUrl: {type: String},
    reviews: [{type:Number}],
 
=======
    backdrop_path: {
      type: String,
      required: [true, "Please provide a backdrop link/image"],
    },
    adult: { type: Boolean, default: false, required: true },
    budget: {type :String },
    genres: [{ type: mongoose.Schema.Types.ObjectId, ref: "Genre" }],
    orginial_language: {type : String },
    original_title: {
      type: String,
      required: [true, "Movie must have an original title"],
    },
    overview: { type: String, required: [true, "Movie must have an overview"] },
    popularity: {type : Number},
    release_date: {type : Date},
    runtime: {type : Number},
    status: { type:String ,
      enum: ["Unplanned", "Planned", "Canceled"],
      default: "Unplanned",
    },
    tagline: {type :String} ,
    title: {type:String},
    trailer_url: {type: String},
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
  },
>>>>>>> 81af386bde675906ce730a684a8e43a906b340a7
  added_by: { type: mongoose.Schema.Types.ObjectId, ref: "Admin" },
});

const Movie =mongoose.model("Movie", movieSchema);
module.exports= Movie ; 
