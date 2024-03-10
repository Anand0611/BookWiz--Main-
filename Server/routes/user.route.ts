import express from "express";
import { registerUser, activateUser } from "../controllers/user.controller";
// import { authorizeRoles, isAutheticated } from "../middleware/auth";
const userRouter = express.Router();

userRouter.post("/registration", registerUser);
userRouter.post("/activate-user", activateUser);
// userRouter.post("/login", loginUser);
// userRouter.get("/logout", isAutheticated, authorizeRoles("Admin"), logoutUser);
export default userRouter;
