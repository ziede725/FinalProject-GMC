const { Schema, model } = require("mongoose");

const roomSchema = new Schema({
  roomName: { type: String, required: true },
  roomCapacity: { type: Number, required: true },
  Theater_id: { type: Schema.Types.ObjectId, ref: "Theater" },
  location: {type: String,required:true}
});

const Room = model("Room", roomSchema);
module.exports = Room;
