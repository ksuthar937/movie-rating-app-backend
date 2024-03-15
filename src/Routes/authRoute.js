const express = require("express");

const router = express.Router();

const { createUser, getUser } = require("../Controllers/userController");

//Registers a new user
router.post("/register", createUser);

//Login a user and returns a JWT
router.post("/login", getUser);

module.exports = router;
