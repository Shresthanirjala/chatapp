
import dotenv from "dotenv";
dotenv.config({path:"../.env"});
import cookieParser from "cookie-parser";
import express from "express";



import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import userRoutes from "./routes/user.routes.js";
import { app, server } from "./socket/socket.js";



const PORT = process.env.PORT 

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

// app.get("/", (req, res) => {
//   // root route http://localhost:5000
//   res.send("hello world");
// });


server.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server Running on ${PORT}`);
});
