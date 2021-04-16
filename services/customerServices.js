const Customer = require("../models/customer.model");

const createCustomer = async (newCustomer) => {
  const emailExist = await Customer.findOne({ email: newCustomer.email });
  const userNameExist = await Customer.findOne({
    userName: newCustomer.userName,
  });
  if (emailExist) {
    return { error: `This Email : ${newCustomer.email} is already taken` };
  }
  if (userNameExist) {
    return {
      error: `This Username : ${newCustomer.userName} is already taken`,
    };
  } else {
    await Customer.create(newCustomer, (err, data) => {
      if (err) console.log(err);
    });
  }
};

const getAllCustomers = async () => {
  const allCustomers = await Customer.find({}, (err, data) => {
    if (err) console.log(err);
  });
  return allCustomers;
};

const getCustomerByID = async (id) => {
  const customer = await Customer.findOne({ _id: id }, (err, data) => {
    if (err) console.log(err);
    else return data;
  });
  return customer;
};

const deleteCustomer = async (id) => {
  const customerToDelete = await Customer.findOne({ _id: id });
  if (!customerToDelete)
    return { error: `This ID : ${id} doesn't match any customer` };
  const customer = await Customer.findOneAndDelete({ _id: id });
  return customer;
};

module.exports = {
  createCustomer,
  getAllCustomers,
  getCustomerByID,
  deleteCustomer,
};
