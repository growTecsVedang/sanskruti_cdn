import * as uploadcontroller from "../controllers/index.upload.controller";
import express from "express";
const router = express.Router();

router.post("/takeImages", uploadcontroller.single_upload);
router.delete("/deleteImage", uploadcontroller.delete_image);

export default router;
