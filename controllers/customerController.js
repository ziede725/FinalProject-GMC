const customerService = require("../services/customerServices");

const registerCustomer = async (req, res) => {
  const possibleErrors = await customerService.createCustomer(req.body);
  if (possibleErrors) throw new Error(possibleErrors.error);
  res.status(200).json({
    status: 200,
    success: true,
    message: "customer created Successfully!",
    data: req.body,
  });
};

const getAllCustomers = async (req, res) => {
  try {
    const allCustomers = await customerService.getAllCustomers();

    res.status(200).json({
      status: 200,
      success: true,
      message: "All customers retrieved Successfully",
      data: allCustomers,
    });
  } catch (error) {
    res.status(400).json({
      status: 400,
      success: false,
      message: "customers retrieving failed!",
      error: error.message,
    });
  }
};

const getCustomerByID = async (req, res) => {
  customerID = req.params.id;

  const customer = await customerService.getCustomerByID(customerID);
  if (!customer)
    throw new Error(`The Id ${customerID} doesn't match any customer`);
  res.status(200).json({
    status: 200,
    success: true,
    data: customer,
  });
};

const deleteCustomer = async (req, res) => {
  customerID = req.params.id;

  const customer = await customerService.deleteCustomer(customerID);
  if (customer.error) throw new Error(customer.error);
  res.status(200).json({
    status: 200,
    success: true,
    message: `Customer with ID : ${customerID}  deleted Successfully`,
    data: customer,
  });
};

module.exports = {
  registerCustomer,
  getAllCustomers,
  getCustomerByID,
  deleteCustomer,
};
