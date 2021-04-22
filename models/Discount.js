const mongoose = require("mongoose");

const discountSchema = new mongoose.Schema({
  screeningId: { type: mongoose.Schema.Types.ObjectId, ref: "Screening" },
  discount_start: {
    type: Date,
    required: [true, "Discount must have a start/end date"],
  },
  discount_end: {
    type: Date,
    required: [true, "Discount must have a start/end date"],
  },
  amount: {
    type: Number,
    required: [true, "Discount must have an amount value"],
  },
});

module.exports = mongoose.model("Discount", discountSchema);
