const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  
    img: {
      type: String,
      // required: [true, "Please provide a poster link/image"],
    },
    genres: [{ type: mongoose.Schema.Types.ObjectId, ref: "Genre" }],
    Language: {type : String },
    Overview: { type: String, required: [true, "Movie must have an overview"] },
    popularity: {type : Number},
    date: {type : Date},
    runTime: {type : String},
    title: {type:String},
    trailerUrl: {type: String},
    reviews: [{type:Number}],
 
  added_by: { type: mongoose.Schema.Types.ObjectId, ref: "Admin" },
});

const Movie =mongoose.model("Movie", movieSchema);
module.exports= Movie ; 
