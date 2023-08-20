import { Request, Response } from "express";
import sharp from "sharp";
import fs from "fs";

const multiple_upload = async (req: Request, res: Response) => {
  const imgArray = req.body;

  let urls = imgArray.map((item: any, key: any) => {
    const name = item.imageName;
    const extension = name.split(".")[1];
    let path = " ";
    if (extension === "png") {
      path = __dirname
        .split("src")[0]
        .concat("public\\")
        .concat(`${name}`)
        .replace(".png", ".webp");
    }
    if (extension === "jpg") {
      path = __dirname
        .split("src")[0]
        .concat("public\\")
        .concat(`${name}`)
        .replace(".jpg", ".webp");
    }
    if (extension === "jpeg") {
      path = __dirname
        .split("src")[0]
        .concat("public\\")
        .concat(`${name}`)
        .replace(".jpeg", ".webp");
    }
    let originalPath = "http://localhost:4501/".concat(
      path.split("\\public\\")[1]
    );
    console.log(originalPath);
    const imageBuffer = Buffer.from(item.image.split(",")[1], "base64");
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

    return originalPath;
  });

  res.status(200).json({
    type: "success",
    message: "image uploaded successfully",
    urls,
  });
};

export default multiple_upload;
