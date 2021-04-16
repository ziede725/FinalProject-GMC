const Customer = require("../models/customer.model");

const createCustomer = async (newCustomer) => {
  await Customer.create(newCustomer);
};

const getAllCustomers = async () => {
  const allCustomers = await Customer.find({}, (err, data) => {
    if (err) console.log(err);
  });
  return allCustomers;
};

const getCustomerByID = async (id) => {
  const customer = await Customer.findOne({ _id: id }, (err, data) => {
    if (err) return(err);
    else return data
  });
  return customer;
};

const deleteCustomer = async (id) => {
  const customer = await Customer.findOneAndDelete({ _id: id }, (err, data) => {
    if (err) console.log(err);
  });
  return customer;
};

module.exports = {
  createCustomer,
  getAllCustomers,
  getCustomerByID,
  deleteCustomer,
};
