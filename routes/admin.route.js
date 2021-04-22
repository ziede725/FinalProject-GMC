const router = require("express").Router();
const { register } = require("../controllers/authAdmin");
const adminController = require("../controllers/adminController");

router.get("/", adminController.getAll);
router.get("/:id", adminController.getAdminById);
router.post("/register", register);

module.exports = router;
