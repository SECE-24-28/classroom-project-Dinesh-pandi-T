const express = require("express");
const roomController = require("./../Controller/RoomController");

const router = express.Router();

router
  .route("/")
  .get(roomController.getAllRooms)
  .post(roomController.createRoom);

router.get("/room/:roomId", roomController.getRoomByRoomId);

router.put("/room/:roomId", roomController.updateRoomByRoomId);

router.delete("/room/:roomId", roomController.deleteRoomByRoomId);

router.get("/available", roomController.getAvailableRooms);

module.exports = router;
