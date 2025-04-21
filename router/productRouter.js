import express from "express";
import mongoose from "mongoose";
import Product from "../models/product.js";
import { addProduct } from "../controllers/productController.js";


const productRouter = express.Router();

productRouter.post("/",addProduct)


export default productRouter;