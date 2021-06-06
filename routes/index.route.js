const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

router.get("/",userController.login);
router.get("/login",userController.login);
router.get("/register",userController.register);
router.get("/users",userController.getusers);
router.post("/user",userController.addUser)

module.exports = router;