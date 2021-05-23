const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({
    dates : [{type: Date}] , 
    startTime: {type: String},
    endTime: {type:String},

    theaterId: { type: mongoose.Schema.Types.ObjectId, ref: "Screening" }
    })

const Sessions = mongoose.model("Session", sessionSchema);
module.exports = Sessions;
