const mongoose = require("mongoose");

const bcrypt = require("bcrypt");

const usersSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
  },

  {
    timestamps: true,
  }
);

usersSchema.methods.comparePassword = async function (loginPassword) {
  return await bcrypt.compare(loginPassword, this.password);
};

const usersModel = mongoose.model("Users", usersSchema);

module.exports = usersModel;
