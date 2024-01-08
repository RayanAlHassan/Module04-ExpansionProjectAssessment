import express from "express";
import {
  
  getProductById,
  deleteProduct,
  updateProduct,
  addProduct,
  getAllProducts,
  
} from "../controller/productControler.js";

const productRoute = express.Router();

// GET all transactions
productRoute.post("/view-all", getAllProducts);

// GET transactions by categoryID
productRoute.post(
  "/viewOne/:id",
  getProductById
);



// POST a new transaction
productRoute.post("/add", addProduct);

// DELETE a transaction
productRoute.delete("/delete", deleteProduct);

// UPDATE a transaction
productRoute.patch("/edit", updateProduct);

export default productRoute;
