import { Router } from "express";

const userRouter = Router();

// Import userController
import { profile, register } from "../controllers/userController.js";

// User routes
userRouter.post("/register", register);
userRouter.post("/profile", profile);
// userRouter.post("/login", userController.login);
// userRouter.post("/logout", userController.logout);

export default userRouter;
