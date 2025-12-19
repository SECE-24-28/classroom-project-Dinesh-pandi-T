const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  roomId: {
    type: String,
    required: true,
    unique: true,
  },

  name: {
    type: String,
    required: true,
  },

  type: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  capacity: {
    type: Number,
    required: true,
  },

  description: {
    type: String,
  },

  amenities: {
    type: [String],
  },

  images: {
    type: [String],
  },

  available:{
    type:[Boolean],
  },

  
});

module.exports = mongoose.model("Room", roomSchema);
