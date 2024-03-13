import express from "express";
import mongoose from "mongoose";
import { mongoDBURL } from "./config.js";
import { Basket } from "./models/Basket.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  return res.send("Hej fra server");
});

//CRUD POST
app.post("/basket", async (req, res) => {
  try {
    const { items } = req.body;

    if (!items || items.length === 0) {
      return res
        .status(400)
        .send({ message: "Basket must contain at least one item." });
    }

    let total = 0;
    for (const item of items) {
      if (!item.productName || item.quantity <= 0 || item.subtotal <= 0) {
        return res.status(400).send({ message: "Invalid item details." });
      }
      total += item.subtotal;
    }

    const newBasket = await Basket.create({ items, total });

    return res.status(201).send(newBasket);
  } catch (error) {
    console.error(error.message);
    res
      .status(500)
      .send({ message: "Error creating basket: " + error.message });
  }
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
    console.error(error);
  });
