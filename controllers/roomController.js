const { create, findOneAndUpdate } = require("../models/Room");
const Room = require("../models/Room");
<<<<<<< HEAD
const Theater = require('../models/Theater')
const ErrorHandler = require("../helpers/errorHandler");
const mongoose= require('mongoose') ;
const jwt = require('jsonwebtoken')

//create room
const createRoom = async (req, res, next) => {
  const { roomName, roomCapacity, token } = req.body;

  try {
    //check if room already exist
    const decodedTheaterId = jwt.verify(token,process.env.JWT_SECRET)
   
    
    let  objectId = mongoose.Types.ObjectId(decodedTheaterId.id);
    
    const theater = await Theater.findById(objectId)
   
    
    const roomExist = await Room.findOne({$and:[{roomName:roomName},{Theater_id:theater._id}]});
    console.log(roomExist) ; 
    if (roomExist)
      throw new ErrorHandler(
        404,
        `Room ${roomName} already exist in Theater `
      );
      
    const room = await Room.create({
      roomName,
      roomCapacity,
      Theater_id:objectId,
      location : theater.city.trim()
=======
const ErrorHandler = require("../helpers/errorHandler");

//create room
const createRoom = async (req, res, next) => {
  const { roomName, roomCapacity, TheaterId } = req.body;

  try {
    //check if room already exist
    const roomExist = await Room.findOne({ roomName }).exec();
    if (roomExist)
      throw new ErrorHandler(
        404,
        `Room ${roomName} already exist in Theater: ${roomExist.TheaterId}`
      );
    const room = await Room.create({
      roomName,
      roomCapacity,
      TheaterId,
>>>>>>> 81af386bde675906ce730a684a8e43a906b340a7
    });
    res.status(201).json({
      success: true,
      message: "Room was created successfully",
      room,
    });
  } catch (error) {
    next(error);
  }
};
//edit room
const editRoom = async (req, res, next) => {
  const id = req.params.id;
<<<<<<< HEAD
  
  try {
    //check if room already exist
    
=======
  try {
    //check if room already exist
>>>>>>> 81af386bde675906ce730a684a8e43a906b340a7
    const roomExist = await Room.findById(id);
    if (!roomExist)
      throw new ErrorHandler(
        404,
        `No room with id : ${id} is found in the database`
      );
    const updatedRoom = await Room.findOneAndUpdate(
      { _id: id },
      { $set: req.body },
      { new: true, runValidators: true }
    ).exec();
    res.status(200).json({
      success: true,
      message: "Room was updated successfully",
      updatedRoom,
    });
  } catch (error) {
    next(error);
  }
};
//remove room
const removeRoom = async (req, res, next) => {
  const id = req.params.id;
  try {
    //check if room already exist
    const roomExist = await Room.findById(id);
    if (!roomExist)
      throw new ErrorHandler(
        404,
        `No room with id : ${id} is found in the database`
      );
    await Room.findOneAndDelete({ _id: id }).exec();
    res.status(200).json({
      success: true,
      message: `room with id : ${id} was deleted successfully`,
    });
  } catch (error) {
    next(error);
  }
};

//Get All Rooms

const getAllRooms = async (req, res, next) => {
<<<<<<< HEAD
 const {token} = req.query;
  try {
   
    const decodedTheaterId = jwt.verify(token,process.env.JWT_SECRET)
    let  objectId = mongoose.Types.ObjectId(decodedTheaterId.id);
    
    const data = await Room.find({Theater_id: objectId});
=======
  try {
    const data = await Room.find({});
>>>>>>> 81af386bde675906ce730a684a8e43a906b340a7
    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    next(error);
  }
};

//Get room by id
const getRoomById = async (req, res, next) => {
  const id = req.params.id;

  try {
    //check if room already exist
    const roomExist = await Room.findById(id);
    if (!roomExist)
      throw new ErrorHandler(
        404,
        `No room with id : ${id} is found in the database`
      );
    const room = await Room.findById(id).exec();
    res.status(200).json({
      success: true,
      room,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createRoom,
  editRoom,
  removeRoom,
  getAllRooms,
  getRoomById,
};
