const express = require("express");
const bookingController = require("./../Controller/BookingController");

const router = express.Router();

router.get("/", bookingController.getAllBookings);

router.get("/user/:userId", bookingController.getUserBookings);
router.post("/", bookingController.createBooking);

router.patch("/:id", bookingController.cancelBooking);

module.exports = router;
