const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
roomName : {type : String , required : true }, 
roomCapacity: {type : Number , required : true} , 
TheaterId:{ type: Schema.Types.ObjectId, ref:'Theater'}
});

module.exports = mongoose.model("Room", roomSchema);
