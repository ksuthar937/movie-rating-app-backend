const usersModel = require("../Models/UsersModel");

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

const createUser = async (userData) => {
  try {
    const { username, email, password } = userData;

    const existingUser = await usersModel.findOne({ email });

    if (existingUser) {
      throw new Error("User already exist! Please login ");
    }

    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new usersModel({ username, email, password: hashedPassword });

    await user.save();

    return user;
  } catch (error) {
    throw error;
  }
};

const getUser = async (userData) => {
  try {
    const { email, password } = userData;

    const user = await usersModel.findOne({ email });

    if (!user) {
      throw new Error("User doesn't exist! Please register");
    }

    const checkPasswordMatch = await user.comparePassword(password);

    if (!checkPasswordMatch) {
      throw new Error("Invalid Credentials");
    }

    const payload = user._id.valueOf();

    const token = jwt.sign(payload, process.env.JWT_SECRET);

    return { token, payload };
  } catch (error) {
    throw error;
  }
};

module.exports = { createUser, getUser };
