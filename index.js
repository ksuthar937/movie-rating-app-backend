const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

const userRoute = require("./src/Routes/authRoute");
const moviesRoute = require("./src/Routes/moviesRoute");
const reviewsRoute = require("./src/Routes/reviewsRoute");

const app = express();
dotenv.config();

const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

//Routes
app.use("/api/users", userRoute);
app.use("/api/movies", reviewsRoute);
app.use("/api/movies", moviesRoute);

app.listen(PORT, () => {
  console.log(colors.bgBlue(`Server listening on PORT : ${PORT}`));
});

//Database connection
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log(colors.bgCyan("Successfully connected to MongoDB"));
  })
  .catch(() => {
    console.log(colors.bgRed("Failed to connect MongoDB"));
  });
