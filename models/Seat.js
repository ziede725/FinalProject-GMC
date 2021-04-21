const mongoose = require("mongoose");

const seatSchema = new mongoose.Schema({
  state: Enumerator(taken,free,UA) ,// ?? check this 
});

module.exports = mongoose.model("Seat", seatSchema);
