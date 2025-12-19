const express = require("express");
const authRouter = express.Router();
const userController = require("../Controller/UserController");

const userRouter = express.Router();

userRouter.route("/login").post(userController.login);
userRouter.route("/signup").post(userController.signup);
userRouter.route("/getAllUser").get(userController.allUsers);



module.exports = userRouter;
