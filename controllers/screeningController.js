const Screening = require("../models/Screening");
const Seat = require("../models/Seat")
const Sessions = require("../models/Sessions");
const ErrorHandler = require("../helpers/errorHandler");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Theater = require("../models/Theater");
const Room = require("../models/Room");
require("dotenv").config();
//Create Screening
const createScreening = async (req, res, next) => {
  const {
    token,
    movieName,
    date,
    session,
    discount,
    visibility,
    roomName,
    price,
  } = req.body;

  // Movie ID and room ID should be added later ;
  try {
    //check if screening already exists in the same room same date same time
    // const screeningExsit = await Screening.findOne({
    //   date,
    //   startTime,
    //   roomId,
    // }).exec();
    // if (screeningExsit)
    //   throw new ErrorHandler(
    //     400,
    //     `A screening already exists in room ${roomId}, on ${date}, at ${startTime}`
    //   );

    const decodedTheaterId = jwt.verify(token, process.env.JWT_SECRET);
    
    let objectId = mongoose.Types.ObjectId(decodedTheaterId.id);

    const room = await Room.findById(roomName);
    if(!room)
    {
      throw new ErrorHandler(409,"You can't create a screening with no rooms")
    }
    const seats =[] ; 
   
    for (let i = 0 ; i<room.roomCapacity ; i++)
    {
    
      seats.push(0) ;  
    }
  
    const screening = await Screening.create({
      movieId: movieName,
      date,
      sessionId: session,
      discount,
      visibility: visibility,
      roomId: room._id,
      price,
      theaterId: objectId,
      location: room.location.trim(),
      seats: seats,
    });
    let seance = await Sessions.findByIdAndUpdate(session, {
      $push: { dates: date },
    });
    res.status(201).json({
      success: true,
      message: "Screening created successfully",
      screening,
    });
  } catch (error) {
    next(error);
  }
};

//Edit Screening
const editScreening = async (req, res, next) => {
  const id = req.params.id;
  console.log(req.body);

  try {
    //check if screening exist

    const screeningExist = await Screening.findById(id);
    console.log(screeningExist.sessionId, screeningExist.date);
    const session = await Sessions.findByIdAndUpdate(screeningExist.sessionId, {
      $pull: { dates: screeningExist.date },
    });
    const newSession = await Sessions.findByIdAndUpdate(
      screeningExist.sessionId,
      { $push: { dates: req.body.date } }
    );

    if (!screeningExist)
      throw new ErrorHandler(
        404,
        `No screening with id : ${id} is found in the database`
      );

    const updatedScreening = await Screening.findOneAndUpdate(
      { _id: id },
      { $set: req.body },
      { new: true, runValidators: true }
    ).exec();
    res.status(200).json({
      success: true,
      message: "Screening updated successfully",
      updatedScreening,
    });
  } catch (error) {
    next(error);
  }
};

//Remove Screening
const deleteScreening = async (req, res, next) => {
  const id = req.params.id;

  try {
    //check if the screening exist
    const screeningExist = await Screening.findById(id);
    const session = await Sessions.findByIdAndUpdate(screeningExist.sessionId, {
      $pull: { dates: screeningExist.date },
    });
    if (!screeningExist)
      throw new ErrorHandler(
        400,
        `No screening with id : ${id} is found in the database`
      );
    // objectId= mongoose.Types.ObjectId(id)

    await Screening.findOneAndDelete({ _id: id }).exec();

    res.status(200).json({
      success: true,
      message: "Screening was deleted with success",
    });
  } catch (error) {
    next(error);
  }
};
//Publish Screening
const publishScreening = async (req, res, next) => {
  const id = req.params.id;

  try {
    //check if screening exist
    const screeningExist = await Screening.findById(id);
    if (!screeningExist)
      throw new ErrorHandler(
        404,
        `No screening with id : ${id} is found in the database`
      );
    const publishedScreening = await Screening.findOneAndUpdate(
      { _id: id },
      { $set: { published: true } },
      { new: true, runValidators: true }
    ).exec();
    res.status(200).json({
      success: true,
      message: "Screening was published with success",
      publishedScreening,
    });
  } catch (error) {
    next(error);
  }
};

const getAll = async (req, res, next) => {
  try {
    const screenings = await Screening.find().populate([
      { path: "roomId" },
      { path: "theaterId" },
      { path: "sessionId" },
      {
        path: "movieId",
        populate: { path: "genres" },
      },
    ]);
    res.status(200).json({
      success: true,
      screenings,
    });
  } catch (error) {
    next(error);
  }
};
//Get All Screenings
const getAllScreenings = async (req, res, next) => {
  try {
    const decodedTheaterId = jwt.verify(token, process.env.JWT_SECRET);
    let objectId = Mongoose.Types.ObjectId(decodedTheaterId.id);
    const screenings = await Screening.find({ theaterId: objectId }).exec();
    res.status(200).json({
      success: true,
      screenings,
    });
  } catch (error) {
    next(error);
  }
};

//GET SCREENING BY THEATER ID ;

const getScreenings = async (req, res, next) => {
  const { token } = req.query;
  try {
    const decodedTheaterId = jwt.verify(token, process.env.JWT_SECRET);

    let objectId = mongoose.Types.ObjectId(decodedTheaterId.id);

    const screenings = await Screening.find({ theaterId: objectId }).exec();

    res.status(200).json({
      success: true,
      screenings,
    });
  } catch (error) {
    next(error);
  }
};
//Get Screening by id
const getScreeningById = async (req, res, next) => {
  const id = req.params.id;

  try {
    //check if screening exist

    const screeningExist = await Screening.findById(id);
    if (!screeningExist)
      throw new ErrorHandler(
        404,
        `No screening with id : ${id} is found in the database`
      );

    const screening = await Screening.findById(id);
    res.status(200).json({
      success: true,
      screening,
    });
  } catch (error) {
    next(error);
  }
};
//Get screening by movie
const getScreeningsByMovie = async (req, res, next) => {
  const movieId = req.params.movieId;

  try {
    const screenings = await Screening.find({ movieId }).exec();
    if (!screenings)
      throw new ErrorHandler(404, `no screenings for movie : ${movieId}`);
    res.status(200).json({
      success: true,
      message: `screenings for movie : ${movieId} were retrieved with success`,
      screenings,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
  createScreening,
  editScreening,
  deleteScreening,
  publishScreening,
  getAllScreenings,
  getScreeningById,
  getScreeningsByMovie,
  getScreenings,
};
