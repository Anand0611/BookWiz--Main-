require("dotenv").config();
import express from "express";
export const app = express();

import cors from "cors";
import cookieParser from "cookie-parser";
import { Request, Response, NextFunction } from "express";
import { ErrorMiddleware } from "./middleware/error";
import userRouter from "./routes/user.route";

//body parser

app.use(express.json({ limit: "50mb" }));

// cookie parser
app.use(cookieParser());

// cors configuration

app.use(
  cors({
    origin: process.env.ORIGIN,
  })
);

//routes

app.use("/api/v1", userRouter);

//testing api

app.get("/test", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    success: true,
    message: "API is working",
  });
});

//unknown route

app.all("*", (req: Request, res: Response, next: NextFunction) => {
  const error = new Error(`Route ${req.originalUrl} not found`) as any;
  error.statusCode = 404;
  next(error);
});

app.use(ErrorMiddleware);
