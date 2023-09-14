import express from "express";
import {addVideo, updateVideo, deleteVideo, getVideo, addView, random, trend, subscribe} from '../controller/videoController.js';
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

// view video
videoRouter.get("/view/:id", addView )

// trend video
videoRouter.get("/trend/:id", trend)

// random video
videoRouter.get("/random/:id", random)

// subscribe video
videoRouter.get("/sub/:id", verifyToken, subscribe)

export default videoRouter;