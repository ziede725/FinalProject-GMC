const Admin = require("../models/Admin");
const ErrorHandler = require("../helpers/errorHandler");
exports.register = async (req, res, next) => {
  const {
    firstName,
    lastName,
    userName,
    email,
    password,
    phoneNumber,
  } = req.body;

  try {
    const admin = await Admin.create({
      firstName,
      lastName,
      userName,
      email,
      password,
      phoneNumber,
    });
    res.status(201).json({
      success: true,
      admin,
    });
  } catch (error) {
    next(error);
  }
};
