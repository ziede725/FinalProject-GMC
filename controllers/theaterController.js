const ErrorHandler = require("../helpers/errorHandler");
const Theater = require("../models/Theater");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoose = require('mongoose')

// get all theaters  query

const getAllTheaters = async (req, res, next) => {
  try {
    const data = await Theater.find({}).exec();
    res.status(200).json({
      success: true,
      data,
    });
  } catch (err) {
    next(err);
  }
};

const getTheaterById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const data = await Theater.findById({ _id: id });
    if (!data) {
      throw new ErrorHandler(
        404,
        `No Theater with following ${id} is found in the database !`
      );
    }
    res.status(200).json({
      success: true,
      data,
    });
  } catch (err) {
    next(err);
  }
};

const editTheater = async (req, res, next) => {
  const id = req.params.id;
  const body = req.body;
  console.log(body)

  try {
 

    const updatedTheater = await Theater.findOneAndUpdate(
      { _id: id },
      { $set: body },
      { new: true, runValidators: true }
    ).exec();
    console.log("updated theater:",updatedTheater)
    res.status(200).json({
      success: true,
      message: `Theater with id : ${id} has been successfully edited `,
      updatedTheater,
    });
  } catch (err) {
    next(err);
  }
};

const deleteTheater = async (req, res, next) => {
  const id = req.params.id;

  try {
    const TheaterExist = await Theater.findOne({ _id: id });
    if (!TheaterExist) {
      throw new ErrorHandler(
        "404",
        `No Theater with this id ${id} exists in the database !`
      );
    }
    const data = await Theater.findOneAndDelete({ _id: id }).exec();
    res.status(200).json({
      success: true,
      message: `Theater with id: ${id} has been deleted successfully !`,
      data,
    });
  } catch (err) {
    next(err);
  }
};

const resetPassword = async (req, res, next) => {
  const id = req.params.id;
  const pwd = req.body.password;
  const {currentPassword,newPassword} = req.body ; 

  try {

    TheaterExist = await Theater.findById(id);
    console.log(TheaterExist) ; 
     
    if (!TheaterExist)
      throw new ErrorHandler(
        404,
        `No Theater with id : '${id}' is found in the database`
      );
     const response =await TheaterExist.matchPasswords(currentPassword) ; 
    
      if(response)
      { 
        if (newPassword.length <= 6)
        throw new ErrorHandler(404, `password too short, minimum length : 6`);
         
       const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(newPassword, salt);
      await Theater.findOneAndUpdate(
      { _id: id },
      { $set: { password: hashedPassword } },
      { runValidators: true }
    )
      .select("password")
      .exec();
        
    

    res.status(200).json({
      success: true,
      message: "Password reset successfully",
    })
  }
    else {
      throw new ErrorHandler(400,"You entered a wrong password ")
    }
  } catch (error) {
    next(error);
  }
};

//Check Theater and return it
const checkedTheater = async (id) => {
  const theater = await Theater.findOne({ _id: id }).exec();

  if (!theater)
    throw new ErrorHandler(
      404,
      `No theater with id : '${id}' is found in the database`
    );

  return theater;
};

module.exports = {
  getAllTheaters,
  getTheaterById,
  deleteTheater,
  editTheater,
  resetPassword,
};
