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
  total: {
    type: Number,
    required: true,
  },
});

const basketSchema = new mongoose.Schema({
  items: [basketItemSchema],
  subtotal: {
    type: Number,
    required: true,
  },
});

export const Basket = mongoose.model("Basket", basketSchema);
