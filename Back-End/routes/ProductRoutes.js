import express from "express";
import {
  createTransaction,
  // getTransaction,
  getTransactions,
  deleteTransaction,
  updateTransaction,
  getTransactionsByCategory,
  getTransByType,
  getTransactionsByDate,
} from "../controller/productControler.js";

const productRoute = express.Router();

// GET all transactions
productRoute.post("/view-all", getTransactions);

// GET transactions by categoryID
productRoute.post(
  "/view-by-category/",
  getTransactionsByCategory
);

// GET transactions by date
productRoute.post("/view-by-date", getTransactionsByDate);

// GET transactions by type
productRoute.post("/view-by-type", getTransByType);

// POST a new transaction
productRoute.post("/add", createTransaction);

// DELETE a transaction
productRoute.delete("/delete", deleteTransaction);

// UPDATE a transaction
productRoute.patch("/edit", updateTransaction);

export default productRoute;
