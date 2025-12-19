const express = require("express");

const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

const userRouter = require("./Route/UserRouter");
app.use("/api/users", userRouter);

const roomRouter = require("./Route/RoomRouter");
app.use("/api/rooms", roomRouter);

const bookingRouter = require("./Route/BookingRouter");
app.use("/api/bookings", bookingRouter);

module.exports = app;
