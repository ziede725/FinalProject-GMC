const customerService = require("../services/customerServices");

const registerCustomer = async (req, res) => {
  try {
    await customerService.createCustomer(req.body);
    res.status(200).json({
      status: 200,
      success: true,
      message: "customer created Successfully!",
      data: req.body,
    });
  } catch (error) {
    res.status(400).json({
      status: 400,
      success: false,
      message: "customer creation failed!",
      error: error.message,
    });
  }
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
  try {
    const customer = await customerService.getCustomerByID(customerID);
    if (customer) {
      res.status(200).json({
        status: 200,
        success: true,
        message: "Customer retrieved Successfully",
        data: customer,
      });
    } else {
      throw new Error(`This ID : ${customerID} doesn't match any customer`);
    }
  } catch (error) {
    res.status(400).json({
      status: 400,
      success: false,
      message: "customer retrieving failed!",
      error: error.message,
    });
  }
};

const deleteCustomer = async (req, res) => {
  customerID = req.params.id;
  try {
    const customer = await customerService.deleteCustomer(customerID);
    if (customer) {
      res.status(200).json({
        status: 200,
        success: true,
        message: `Customer with ID : ${customerID}  deleted Successfully`,
        data: customer,
      });
    } else {
      res.status(404).json({
        status: 404,
        success: false,
        message: "customer deleting failed!",
        error: `This ID : ${customerID} doesn't match any customer`,
      });
    }
  } catch (error) {
    res.status(400).json({
      status: 400,
      success: false,
      message: "customer deleting failed!",
      error: error.message,
    });
  }
};

module.exports = {
  registerCustomer,
  getAllCustomers,
  getCustomerByID,
  deleteCustomer,
};
