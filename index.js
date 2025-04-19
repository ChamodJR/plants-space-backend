import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import User from "./models/user.js";
import userRouter from "./router/userRouter.js";

let app = express();

app.use(bodyParser.json());

let mongoUrl = "mongodb+srv://chamodjasintha96:plants-space@cluster0.gbe2xd7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(mongoUrl)

let connection = mongoose.connection
connection.once("open",()=>{
    console.log("MongoDB connection established successfully")
})

app.use("/users",userRouter)


app.listen(3000,()=>{
    console.log("Server is running on port 3000")
});