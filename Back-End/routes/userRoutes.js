import express from "express";
import {
  createUser,
  showAllUsers,
  showOneUser,
  updateUser,
  deleteUser,
  login,
  logout
} from "../controller/userControler.js";
import { authenticateUser, authorizeUser  } from "../middlewares/auth.js";

const userRoutes = express.Router();

// Create a user
userRoutes.post("/create",createUser);

// Show all users
userRoutes.get(
  "/view-all",
  authenticateUser,
  authorizeUser(["Admin"]),
  showAllUsers
);

// Show one user
userRoutes.get("/user", showOneUser);

// Update a user
userRoutes.patch("/update",updateUser);

// Delete a user
userRoutes.delete("/delete", deleteUser);

// Login user
userRoutes.post("/logged-in-user", authenticateUser , loggedInUser);
userRoutes.post("/login",  login);
userRoutes.post("/login",  logout);

export default userRoutes;
