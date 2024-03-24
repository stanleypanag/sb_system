import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
import {UserRouter} from "./routes/user.js";

const app = express();

const conn_String = process.env.COMPASS_CONNECTION_STRING;

mongoose.connect(`${conn_String}authentication`);

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use("/auth", UserRouter);

// 127.0.0.1 is the same as localhost

app.listen(process.env.REACT_APP_SERVER_PORT, () => {
  console.log(`Server is running at port ${process.env.REACT_APP_SERVER_PORT}`);
});
