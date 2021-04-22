const router = require("express").Router();
const { register } = require("../controllers/authAdmin");
const adminController = require("../controllers/adminController");

router.get("/", adminController.getAll);
router.get("/:id", adminController.getAdminById);
router.patch("/:id/edit", adminController.editAdmin);
router.post("/register", register);
router.delete("/:id", adminController.deleteAdmin);
module.exports = router;
