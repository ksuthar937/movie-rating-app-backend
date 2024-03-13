const userService = require("../Services/userService");

const createUser = async (req, res) => {
  try {
    const userData = req.body;

    const user = await userService.createUser(userData);

    res.status(201).json({
      message: "User registered successfully",
      user: user,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getUser = async (req, res) => {
  try {
    const userData = req.body;

    const user = await userService.getUser(userData);

    res.status(200).json({
      message: "User Login Successfully",
      token: user.token,
      user: user.payload,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const testUser = (req, res) => {
  try {
    res.status(200).json("workingggg");
  } catch (error) {
    res.status(500).json({
      message: "errrorr",
    });
  }
};

module.exports = {
  createUser,
  getUser,
  testUser,
};
