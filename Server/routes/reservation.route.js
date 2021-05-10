const router = require("express").Router();
const reservationController = require("../controllers/reservationController");

//Create reservation
router.post("/", reservationController.createReservation);
//Delete reservation
router.delete("/:id", reservationController.cancelReservation);
//Get all reservations
router.get("/", reservationController.getAllReservations);
//Get reservations by Customer Id
router.get("/filter", reservationController.getFilteredReservations);
//Get reservations by Theater Id 
router.get("/theater/:id/")
//Get reservation by Id
router.get("/:id", reservationController.getReservationById);

module.exports = router;
