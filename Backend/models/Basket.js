import mongoose from "mongoose";

const basketItemSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  subtotal: {
    type: Number,
    required: true,
  },
});

const basketSchema = new mongoose.Schema({
  items: [basketItemSchema],
  total: {
    type: Number,
    required: true,
  },
});

export const Basket = mongoose.model("Basket", basketSchema);
