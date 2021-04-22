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

module.exports = {
  getAll,
  getAdminById,
};
