import * as uploadcontroller from "../controllers/index.upload.controller";
import express from "express";
const router = express.Router();

router.post("/takeImages", uploadcontroller.single_upload);
router.delete("/deleteImage", uploadcontroller.delete_image);
router.post("/takeMultipleImages", uploadcontroller.multiple_upload);
router.post(
  "/takeMultipleImagesAndUpdate",
  uploadcontroller.multiple_upload_update
);
router.post("/svgUpload", uploadcontroller.svg_single_upload);
export default router;
