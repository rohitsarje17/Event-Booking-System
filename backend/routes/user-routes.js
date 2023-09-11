import express from "express";
import { allUsers, deleteUser, signUp, updateUser } from "../controllers/user-controller";

const userRouter = express.Router();

userRouter.get("/",allUsers);
userRouter.post("/signup",signUp);
userRouter.put("/:id",updateUser);
userRouter.delete("/:id",deleteUser);

export default userRouter;