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
    sendToken(admin, 201, res);
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password)
    throw new ErrorHandler(400, " Please provide email and password");

  try {
    const admin = await Admin.findOne({ email }).select("+password").exec();
    if (!admin) throw new ErrorHandler(404, "Invalid credentials email");

    const isMatch = await admin.matchPasswords(password);
    if (!isMatch) throw new ErrorHandler(404, "Invalid Credentials pwd");
    sendToken(admin, 200, res);
  } catch (error) {
    next(error);
  }
};

exports.forgotPassword = async (req, res, next) => {
  res.status(200).json({
    success: true,
    message: `You requested a reset password link, chek your email!`,
  });
};

const sendToken = (admin, statusCode, res) => {
  const token = admin.getSignedToken();
  res
    .status(statusCode)
    .json({ success: true, message: "logged in with success", token });
};
