import express, { response } from "express";
import mongoose, { mongo } from "mongoose";
import { mongoDBURL } from "./config.js";

const app = express();

app.get("/", (req, res) => {
  return res.status(234).send("Hej fra server");
});

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(3000, () => {
      console.log(`App is listening on port: 3000`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
