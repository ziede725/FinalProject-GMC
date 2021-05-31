const router = require("express").Router();
const {
  registerAdmin,
  loginAdmin,
  forgotPasswordAdmin,
  logoutAdmin,
} = require("../utils/auth");
const adminController = require("../controllers/adminController");
const { protectAdmin } = require("../middlewares/checkAuth");

//Authentication Routes
router.post("/register", registerAdmin);

//Admins Routes
router.get("/", protectAdmin, adminController.getAll);
router.get("/:id", protectAdmin, adminController.getAdminById);
router.patch("/:id/edit", protectAdmin, adminController.editAdmin);
router.patch(
  "/:id/reset-password",
  protectAdmin,
  adminController.resetPassword
);
router.delete("/:id", protectAdmin, adminController.deleteAdmin);

module.exports = router;
