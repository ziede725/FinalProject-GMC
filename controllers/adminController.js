const ErrorHandler = require("../helpers/errorHandler");
const Admin = require("../models/Admin");

const getAll = async (req, res, next) => {
  try {
    const data = await Admin.find({}).exec();
    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    next(error);
  }
};

const getAdminById = async (req, res, next) => {
  const id = req.params.id;
  console.log(id);
  try {
    const data = await Admin.findOne({ _id: id }).exec();
    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    next(error);
  }
};

const editAdmin = async (req, res, next) => {
  const id = req.params.id;
  const body = req.body;
  try {
    userExist = await Admin.findOne({ _id: id }).exec();
    if (!userExist)
      throw new ErrorHandler(
        404,
        `No Admin with id : '${id}' is found in the database`
      );
    await Admin.findOneAndUpdate({ _id: id }, { $set: body }).exec();
    data = await Admin.findOne({ _id: id }).exec();
    res.status(200).json({
      success: true,
      message: `Admin with id :${id} has been edited successfully`,
      data,
    });
  } catch (error) {
    next(error);
  }
};

const deleteAdmin = async (req, res, next) => {
  const id = req.params.id;
  try {
    userExist = await Admin.findOne({ _id: id }).exec();
    if (!userExist)
      throw new ErrorHandler(
        404,
        `No Admin with id : '${id}' is found in the database`
      );
    await Admin.findOneAndDelete({ _id: id }).exec();
    res.status(200).json({
      success: true,
      message: `Admin with id :${id} has been deleted successfully`,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
  getAdminById,
  editAdmin,
  deleteAdmin,
};
