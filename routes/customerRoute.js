const router = require("express").Router();
const customerController = require("../controllers/customerController");
const validation = require("../middlewares/validationMiddleware");
const customerValidation = require("../validations/customerValidation");

const use = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

router.get("/", customerController.getAllCustomers);

router.get("/:id", use(customerController.getCustomerByID));

router.post(
  "/register",
  validation(customerValidation),
  use(customerController.registerCustomer)
);

router.delete("/:id", use(customerController.deleteCustomer));

module.exports = router;
