const Room = require("./../Model/RoomModel");

exports.getAllRooms = async (req, res) => {
  try {
    const rooms = await Room.find({ available: true });

    res.status(200).json({
      status: "Success",
      data: rooms,
    });
  } catch (err) {
    res.status(400).json({
      status: "Fail",
      message: err.message,
    });
  }
};


exports.getRoom = async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);

    res.status(200).json({
      status: "Success",
      data: room,
    });
  } catch (err) {
    res.status(404).json({
      status: "Fail",
      message: err.message,
    });
  }
};

exports.createRoom = async (req, res) => {
  try {
    const newRoom = await Room.create(req.body);

    res.status(201).json({
      status: "Success",
      data: newRoom,
    });
  } catch (err) {
    res.status(400).json({
      status: "Fail",
      message: err.message,
    });
  }
};

exports.updateRoom = async (req, res) => {
  try {
    const updatedRoom = await Room.findOneAndUpdate(
      { roomId: req.params.id }, 
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedRoom) {
      return res.status(404).json({
        status: "Fail",
        message: "Room not found",
      });
    }

    res.status(200).json({
      status: "Success",
      data: updatedRoom,
    });
  } catch (err) {
    res.status(400).json({
      status: "Fail",
      message: err.message,
    });
  }
};


exports.deleteRoom = async (req, res) => {
  try {
    const deletedRoom = await Room.findOneAndDelete({
      roomId: req.params.id, 
    });

    if (!deletedRoom) {
      return res.status(404).json({
        status: "Fail",
        message: "Room not found",
      });
    }

    res.status(200).json({
      status: "Success",
      message: "Room deleted successfully",
    });
  } catch (err) {
    res.status(400).json({
      status: "Fail",
      message: err.message,
    });
  }
};
exports.getAvailableRooms = async (req, res) => {
  const today = new Date().toISOString().split("T")[0];

  const activeBookings = await Booking.find({
    fromDate: { $lte: today },
    toDate: { $gte: today },
  });

  const bookedRoomIds = activeBookings.map((b) => b.roomId);

  const rooms = await Room.find({
    roomId: { $nin: bookedRoomIds },
  });

  res.json({ data: rooms });
};

exports.updateRoomAvailability = async (req, res) => {
  try {
    const room = await Room.findOneAndUpdate(
      { roomId: req.params.roomId }, 
      { available: false },
      { new: true }
    );

    if (!room) {
      return res.status(404).json({
        status: "Fail",
        message: "Room not found",
      });
    }

    res.status(200).json({
      status: "Success",
      data: room,
    });
  } catch (err) {
    res.status(400).json({
      status: "Fail",
      message: err.message,
    });
  }
};
