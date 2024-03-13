import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  country: {
    type: String,
    required: true,
  },

  firstName: {
    type: String,
    required: true,
  },

  lastName: {
    type: String,
    required: true,
  },

  phone: {
    type: Number,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  company: {
    type: String,
    required: false,
  },

  cvr: {
    type: Number,
    required: true,
  },

  addressLine1: {
    type: String,
    required: true,
  },

  zipCode1: {
    type: Number,
    required: true,
  },

  city1: {
    type: String,
    required: true,
  },

  addressLine2: {
    type: String,
    required: false,
  },

  zipCode2: {
    type: Number,
    required: false,
  },

  city2: {
    type: String,
    required: false,
  },

  isMarketing: {
    type: Boolean,
    required: false,
  },

  orderComment: {
    type: String,
    required: false,
  },

  basket: [{ type: mongoose.Schema.Types.ObjectId, ref: "Basket" }],
});

export const Order = mongoose.model("Order", orderSchema);
