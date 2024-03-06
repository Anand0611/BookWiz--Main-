import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();


//middlewares
//routes
//Error Handler Middleware


mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("Successfully connected to MongoDB");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB: ", error);
  });

  //listen server
app.listen(process.env.PORT, () => {
  console.log("Server listening on port: ", process.env.PORT);
});
