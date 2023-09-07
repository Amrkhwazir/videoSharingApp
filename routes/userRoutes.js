import express from "express";
import { updateUser, deleteUser, subscribeUser, getUser,unsubscribeUser,likeVideo, dislikeVideo } from "../controller/userController.js";
import { verifyToken } from "../verifyToken.js";

const userRouter = express.Router();

// update user
userRouter.put("/:id", verifyToken, updateUser) 

// delete user
userRouter.delete("/:id", deleteUser)

// get a user
userRouter.get("/find/:id", getUser)

// subscribe a user
userRouter.put("/sub/:id", subscribeUser)


// unsubscribe a user
userRouter.put("/unsub/:id", unsubscribeUser)


// like a video
userRouter.put("/like/:videoId", likeVideo)


// dislike a video
userRouter.put("/dislike/:videoId", dislikeVideo)



export default userRouter;