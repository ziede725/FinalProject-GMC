const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  movieInfos:{type : String } 
});

module.exports = mongoose.model("Movie", movieSchema);