const router = require("express").Router();
const customerController = require("../controllers/customerController");
const validation = require("../middlewares/validationMiddleware");
const customerValidation = require("../validations/customerValidation");

router.get("/", customerController.getAllCustomers);

router.get("/:id", customerController.getCustomerByID);

router.post(
  "/register",
  validation(customerValidation),
  customerController.registerCustomer
);

router.delete("/:id", customerController.deleteCustomer);

module.exports = router;
