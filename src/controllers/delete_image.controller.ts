import { Request, Response } from "express";
import fs from "fs";
import path from "path";

const delete_image = async (req: Request, res: Response) => {
  const url_params = req.query;
  console.log(url_params);
  const name = url_params.name;
  const location = path.join(__dirname, "../../public/");
  let file_path = "";
  if (name !== undefined) {
    file_path = `${location}${name}`;
    fs.unlinkSync(file_path);
  }
  res.status(200).json({
    type: "success",
  });
};

export default delete_image;
