const mongoose = require("mongoose");

const genreSchema = new mongoose.Schema({
  name: { type: String, required: [true, "a Genre must have a name"] },
  count: Number,
});

module.exports = mongoose.model("Genre", genreSchema);
