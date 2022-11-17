import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import path from "node:path";
import { router } from "./router";


const urlDb = process.env.DATABASE_URL as string;
mongoose.connect(urlDb)
  .then(() => {
    const app = express();
    app.use(express.json());
    app.use("/uploads", express.static(path.resolve(__dirname,"..","uploads")));
    app.use(router);
    app.listen(3500, ()=> {
      console.info("Server is running on 3500 port");
    });
  })
  .catch((err) => console.error(`erro ao conectar no mongo: ${err}`));

