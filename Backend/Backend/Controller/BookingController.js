const Booking = require("./../Model/BookingModel");

exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();

    res.status(200).json({
      status: "Success",
      results: bookings.length,
      data: bookings,
    });
  } catch (err) {
    res.status(400).json({
      status: "Fail",
      message: err.message,
    });
  }
};

exports.getUserBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({
      userId: req.params.userId,
    });

    res.status(200).json({
      status: "Success",
      results: bookings.length,
      data: bookings,
    });
  } catch (err) {
    res.status(400).json({
      status: "Fail",
      message: err.message,
    });
  }
};

exports.createBooking = async (req, res) => {
  try {
    const newBooking = await Booking.create(req.body);

    res.status(201).json({
      status: "Success",
      data: newBooking,
    });
  } catch (err) {
    res.status(400).json({
      status: "Fail",
      message: err.message,
    });
  }
};

exports.cancelBooking = async (req, res) => {
  try {
    const booking = await Booking.findOneAndUpdate(
      { bookingId: req.params.id },
      { status: "Cancelled" },
      { new: true }
    );

    if (!booking) {
      return res.status(404).json({
        status: "Fail",
        message: "Booking not found",
      });
    }

    res.status(200).json({
      status: "Success",
      message: "Booking cancelled successfully",
      data: booking,
    });
  } catch (err) {
    res.status(400).json({
      status: "Fail",
      message: err.message,
    });
  }
};
