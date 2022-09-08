import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import vehiclesRoute from "./routes/vehicles.js";
const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB Disconnected");
});

app.get("/users", (req, res) => {
  res.send("hello first request");
});

//middleware
app.use((req, res, next) => {
  console.log("hii middleware");
  next();
});

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);
app.use("/api/vehicles", vehiclesRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res
    .status(errorStatus)
    .json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
    });
});

app.listen(8800, () => {
  connect();
  console.log("Connect to backend.");
});
