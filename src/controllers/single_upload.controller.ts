import { Request, Response } from "express";
import sharp from "sharp";
import fs from "fs";

const single_upload = async (req: Request, res: Response) => {
  const name = req.body.data.imageName;
  const extension = name.split(".")[1];
  const buf = req.body.data.imageBuffer;
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
  console.log(buf);
  let originalPath = "https://cdn.sanskrutinx.in/".concat(
    path.split("\\public\\")[1]
  );
  console.log(originalPath);

  const imageBuffer = Buffer.from(buf);
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

export default single_upload;
