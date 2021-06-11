const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({
    dates : [{type: String}] , 
    sessionName:{type: String},
    startTime: {type: String},
    endTime: {type:String},
    order:{type: Number},

    theaterId: { type: mongoose.Schema.Types.ObjectId, ref: "Screening" }
    })

const Sessions = mongoose.model("Session", sessionSchema);
module.exports = Sessions;
