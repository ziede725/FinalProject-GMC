const router = require("express").Router();
const { register, login, forgotPassword } = require("../controllers/authAdmin");
const adminController = require("../controllers/adminController");
const { protectAdmin } = require("../middlewares/checkAuth");

//Authentication Routes
router.post("/register", register);
router.post("/login", login);
router.post("/forgot-password", forgotPassword);

//Admins Routes
router.get("/", adminController.getAll);
router.get("/:id", adminController.getAdminById);
router.patch("/:id/edit", protectAdmin, adminController.editAdmin);
router.patch(
  "/:id/reset-password",
  protectAdmin,
  adminController.resetPassword
);
router.delete("/:id", protectAdmin, adminController.deleteAdmin);

module.exports = router;
