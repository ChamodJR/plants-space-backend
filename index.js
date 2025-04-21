import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import User from "./models/user.js";
import userRouter from "./router/userRouter.js";
import productRouter from "./router/productRouter.js";
import jwt from "jsonwebtoken";

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    let token = req.header("Authorization");
 
    if (token != null) {
       token = token.replace("Bearer ", "");
 
       try {
          const decoded = jwt.verify(token, "plants-space");
          req.user = decoded;
       } catch (err) {
          req.user = null;
       }
    }
    next();
 });
 


let mongoUrl = "mongodb+srv://chamodjasintha96:plants-space@cluster0.gbe2xd7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(mongoUrl)

const connection = mongoose.connection

connection.once("open",()=>{
    console.log("MongoDB connection established successfully")
})

app.use("/api/users",userRouter)
app.use("/api/products",productRouter)

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
});