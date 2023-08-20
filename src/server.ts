import path from "path";
import cors from "cors";
import * as dotenv from "dotenv";
dotenv.config({ path: path.join(__dirname, "..", ".env") });
import express, { Application, Request, Response } from "express";
import { env } from "./config/env";
import useUpload from "./routes/upload.routes";
const app: Application = express();
app.use(cors());
const PORT = Number(env.PORT) || 4502;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "50mb" }));

app.get("/", function (req: Request, res: Response) {
  res.send("Sanskrutinx Private CDN");
  // res.status(200).json({ msg: "Noice" });
});

app.use("/cdn/v1/images", useUpload);

app.listen(PORT, async () => {
  console.log(`server running on port ${PORT}, in ${env.NODE_ENV} enviroment`);
});

export default app;
