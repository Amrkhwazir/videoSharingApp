import express from "express";
import {addVideo, updateVideo, deleteVideo, getVideo} from '../controller/videoController.js';
import {verifyToken} from "../verifyToken.js"

const videoRouter = express.Router();
// add video
videoRouter.post("/", verifyToken, addVideo)

// update video
videoRouter.put("/:id", verifyToken, updateVideo)

// delete video
videoRouter.delete("/:id", verifyToken, deleteVideo)

// get video
videoRouter.get("/find/:id", getVideo)

export default videoRouter;