const Admin = require("../models/Admin");
const Customer = require("../models/Customer");
const Theater = require("../models/Theater");
const ErrorHandler = require("../helpers/errorHandler");

//Admin Authentication
exports.registerAdmin = async (req, res, next) => {
  const body = req.body;

  try {
    const admin = await Admin.create(
      {
        body,
      },
      {
        runValidators: true,
      }
    );
    sendToken(admin, 201, res);
  } catch (error) {
    next(error);
  }
};
exports.loginAdmin = async (req, res, next) => {
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
exports.forgotPasswordAdmin = async (req, res, next) => {
  res.status(200).json({
    success: true,
    message: `You requested a reset password link, chek your email!`,
  });
};

//Customer authentication
exports.registerCustomer = async (req, res, next) => {
  const body = req.body;

  try {
    const admin = await Customer.create(
      {
        body,
      },
      {
        runValidators: true,
      }
    );
    sendToken(admin, 201, res);
  } catch (error) {
    next(error);
  }
};
exports.loginCustomer = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password)
    throw new ErrorHandler(400, " Please provide email and password");

  try {
    const customer = await Customer.findOne({ email })
      .select("+password")
      .exec();
    if (!customer) throw new ErrorHandler(404, "Invalid credentials email");

    const isMatch = await customer.matchPasswords(password);
    if (!isMatch) throw new ErrorHandler(404, "Invalid Credentials pwd");
    sendToken(customer, 200, res);
  } catch (error) {
    next(error);
  }
};
exports.forgotPasswordCustomer = async (req, res, next) => {
  res.status(200).json({
    success: true,
    message: `You requested a reset password link, chek your email!`,
  });
};

//TODO Theater Authentication
exports.registerTheater = async (req, res, next) => {
  const body = req.body;

  try {
    const theater = await Theater.create(
      {
        body,
      },
      {
        runValidators: true,
      }
    );
    sendToken(theater, 201, res);
  } catch (error) {
    next(error);
  }
};
exports.loginTheater = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password)
    throw new ErrorHandler(400, " Please provide email and password");

  try {
    const theater = await Theater.findOne({ email }).select("+password").exec();
    if (!theater) throw new ErrorHandler(404, "Invalid credentials email");

    const isMatch = await theater.matchPasswords(password);
    if (!isMatch) throw new ErrorHandler(404, "Invalid Credentials pwd");
    sendToken(theater, 200, res);
  } catch (error) {
    next(error);
  }
};
exports.forgotPasswordTheater = async (req, res, next) => {
  res.status(200).json({
    success: true,
    message: `You requested a reset password link, chek your email!`,
  });
};

const sendToken = (user, statusCode, res) => {
  const token = user.getSignedToken();
  res
    .status(statusCode)
    .json({ success: true, message: "logged in with success", token });
};
