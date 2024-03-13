const express = require("express");

const router = express.Router();

const {
  createUser,
  getUser,
  testUser,
} = require("../Controllers/userController");

const authentication = require("../Middlewares/authentication");

router.post("/register", createUser);

router.post("/login", getUser);

router.get("/testing", authentication, testUser);

module.exports = router;
