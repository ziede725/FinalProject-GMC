const router = require("express").Router();
const reservationController = require("../controllers/reservationController");

//Create reservation
router.post("/", reservationController.createReservation);
//Delete reservation
router.delete("/:id", reservationController.cancelReservation);
//Get all reservations
router.get("/", reservationController.getAllReservations);
//Get reservation by Id
router.get("/:id", reservationController.getReservationById);
//Get reservations by Customer Id
router.get("/:customerId", reservationController.getReservationByCustomerId);

module.exports = router;
