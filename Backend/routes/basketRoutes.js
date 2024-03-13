import express from "express";
import { Basket } from "../models/Basket.js";

const router = express.Router();

//CRUD POST
router.post("/", async (req, res) => {
  try {
    const { items } = req.body;

    if (!items || items.length === 0) {
      return res
        .status(400)
        .send({ message: "Basket must contain at least one item." });
    }

    let subtotal = 0;
    for (const item of items) {
      if (!item.productName || item.quantity <= 0 || item.total <= 0) {
        return res.status(400).send({ message: "Invalid item details." });
      }
      subtotal += item.total;
    }

    const newBasket = await Basket.create({ items, subtotal });

    return res.status(201).send(newBasket);
  } catch (error) {
    console.error(error.message);
    res
      .status(500)
      .send({ message: "Error creating basket: " + error.message });
  }
});

//CRUD GET (all baskets)
router.get("/", async (req, res) => {
  try {
    const baskets = await Basket.find({});
    return res.status(200).send(baskets);
  } catch (error) {
    console.error(error.message);
    res
      .status(500)
      .send({ message: "Error fetching baskets: " + error.message });
  }
});

//CRUD GET (basket by ID)
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const basket = await Basket.findById(id);

    if (!basket) {
      return res.status(404).send({ message: "Basket not found" });
    }

    return res.status(200).send(basket);
  } catch (error) {
    console.error(error.message);
    res
      .status(500)
      .send({ message: "Error fetching basket: " + error.message });
  }
});

//CRUD DELETE (basket by ID)
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBasket = await Basket.findByIdAndDelete(id);

    if (!deletedBasket) {
      return res.status(404).send({ message: "Basket not found" });
    }

    return res.status(200).send({ message: "Basket deleted successfully" });
  } catch (error) {
    console.error(error.message);
    res
      .status(500)
      .send({ message: "Error deleting basket: " + error.message });
  }
});

export default router;
