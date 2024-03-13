import mongoose from "mongoose";

const basketSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },

  quantity: {
    type: String,
    required: true,
  },

  subtotal: {
    type: Number,
    required: true,
  },
});
