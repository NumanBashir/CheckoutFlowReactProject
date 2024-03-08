import express from "express";
import mongoose from "mongoose";
import { mongoDBURL } from "./config.js";
import orderRoutes from "./routes/orderRoutes.js"; 

const app = express();

app.use(express.json());  

app.get("/", (req, res) => {
  return res.send("Hej fra server");
});

app.use("/orders", orderRoutes);  

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(3000, () => {
      console.log(`App is listening on port: 3000`);
    });
  })
  .catch((error) => {
    console.error(error);
  });
