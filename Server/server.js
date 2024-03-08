import express from "express";

import mongoose from "mongoose";

import dotenv from "dotenv";
import cors from "cors";

import userRoutes from "./Routes/user.Route.js"
import authRoutes from "./Routes/auth.route.js"

dotenv.config();




// connect to MongoDB

mongoose.connect(process.env.DB_URL).then(()=>{
  console.log('Database Connection Successfull');
}).catch((err)=>{
  console.error(err);
});


const app = express();
app.use(express.json()); // for parsing application
app.use(cors());


// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use("/api/user", userRoutes); 
app.use("/api/auth", authRoutes); 


app.use((error, req, res, next) => {
  const statusCode = error.statusCode ||  500;
  const message = error.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    error: message,
    statusCode,
  });
});