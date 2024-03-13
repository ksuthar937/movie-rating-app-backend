const express = require("express");

const colors = require("colors");

const dotenv = require("dotenv");

const mongoose = require("mongoose");

const userRoute = require("./src/Routes/authRoute");

const app = express();

app.use(express.json());

dotenv.config();

app.use("/api/users", userRoute);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(colors.bgBlue(`Server listening on PORT : ${PORT}`));
});

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log(colors.bgCyan("Successfully connected to MongoDB"));
  })
  .catch(() => {
    console.log(colors.bgRed("Failed to connect MongoDB"));
  });
