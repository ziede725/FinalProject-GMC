const router = require("express").Router();
const {
  registerAdmin,
  loginAdmin,
  forgotPasswordAdmin,
} = require("../utils/auth");
const adminController = require("../controllers/adminController");
const { protectAdmin } = require("../middlewares/checkAuth");

//Authentication Routes
router.post("/register", registerAdmin);
router.post("/login", loginAdmin);
router.post("/forgot-password", forgotPasswordAdmin);

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
