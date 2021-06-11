const ErrorHandler = require("../helpers/errorHandler");
const Theater = require("../models/Theater");
const jwt = require("jsonwebtoken");
const Sessions = require("../models/Sessions");

const editSession=async(req,res,next)=>{
    const {id,token,sessionName,order,startTime,endTime}= req.body
    
    try {
        const editedSession = await Sessions.findByIdAndUpdate(id,{sessionName,order,startTime,endTime})      
        res.status(200).json({
            succes: true , 
            editedSession
        })
    } catch (error) {
        next(error)
    }
}

const addSession=async(req,res,next)=>{
    const {id,sessionName,order,startTime,endTime} = req.body ; 
    try {

   const newSession = await Sessions.create({sessionName,order,startTime,endTime,theaterId: id}) ; 
       
        const theater = await Theater.findByIdAndUpdate(id,{$push:{sessions:newSession._id}}) ; 

        res.status(200).json({
            succes: true , 
            message: "Session added successfully",
            newSession
        })
        
    } catch (error) {

    next(error)        
    }


}
const deleteSession=async (req,res,next)=>{
    const {token,id} = req.body ; 
    console.log(id)

    try {
        const decodedTheater= jwt.verify(token,process.env.JWT_SECRET) ; 
        const session = await Sessions.findByIdAndDelete(id) ; 


        res.status(200).json({
            success: true , 
            message: 'session deleted successfully',
            sessions,
        })
        
    } catch (error) {
     next(error)   
    }

}

const getSession=async (req,res,next)=>{
    const id = req.params.id
    try {
        const decodedTheaterId = jwt.verify(id,process.env.JWT_SECRET)
        const sessions = await Sessions.find({theaterId:decodedTheaterId.id}) ; 
        
        res.status(200).json({
            success : true , 
            sessions
        })
    } catch (error) {
        next(error)
    }

}


module.exports = {
    getSession,
    deleteSession,
    editSession,
    addSession,
   
  };