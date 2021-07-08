const { Schema, model } = require("mongoose");

const roomSchema = new Schema({
  roomName: { type: String, required: true },
  roomCapacity: { type: Number, required: true },
<<<<<<< HEAD
  Theater_id: { type: Schema.Types.ObjectId, ref: "Theater" },
  location: {type: String,required:true}
=======
  TheaterId: { type: Schema.Types.ObjectId, ref: "Theater" },
>>>>>>> 81af386bde675906ce730a684a8e43a906b340a7
});

const Room = model("Room", roomSchema);
module.exports = Room;
