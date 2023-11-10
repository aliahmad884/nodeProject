const { GetAll, GetbById, Register, Login, DeleteUser } = require("../Controlers/Users.controller");
const express = require("express");
const UserRouter = express.Router();

UserRouter.get("/", GetAll);
UserRouter.get("/:id", GetbById);
UserRouter.post("/signup", Register);
UserRouter.post("/login", Login);
// UserRouter.post("/", AddNew);
UserRouter.delete("/:id", DeleteUser);

module.exports = UserRouter;

