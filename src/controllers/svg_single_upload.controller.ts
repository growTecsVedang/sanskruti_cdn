import { Request, Response } from "express";
import sharp from "sharp";
import fs from "fs";

const svg_single_upload = async (req: Request, res: Response) => {
  const name = req.body.imageName;
  const extension = name.split(".")[1];
  const imageBuffer = Buffer.from(req.body.image, "base64");
  console.log(name);
  let path = " ";
  if (extension === "svg") {
    path = __dirname
      .split("src")[0]
      .concat("public\\")
      .concat(`${name}`)
      .replace(".svg", ".webp");
  }
  if (extension === "png") {
    path = __dirname
      .split("src")[0]
      .concat("public\\")
      .concat(`${name}`)
      .replace(".png", ".webp");
  }
  let originalPath = "http://localhost:4501/".concat(
    path.split("\\public\\")[1]
  );
  console.log(originalPath);

  sharp(imageBuffer)
    .toFormat("webp")
    .toBuffer()
    .then((output) => {
      console.log(output);
      fs.writeFileSync(path, output);
      console.log("Image converted to WebP format and saved.");
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  res.status(200).json({
    type: "success",
    message: "image uploaded successfully",
    path: originalPath,
  });
};

export default svg_single_upload;
