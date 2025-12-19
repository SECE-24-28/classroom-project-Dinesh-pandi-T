const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  bookingId: {
    type: String,
    required: true,
    unique: true,
  },

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  roomId: {
    type: String, 
    required: true,
  },

  fromDate: {
    type: Date,
    required: true,
  },

  toDate: {
    type: Date,
    required: true,
  },

  totalAmount: {
    type: Number,
    required: true,
  },

  status: {
    type: String,
    enum: ["Booked", "Cancelled"],
    default: "Booked",
  },

});

module.exports = mongoose.model("Booking", bookingSchema);
