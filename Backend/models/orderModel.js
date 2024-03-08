import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Product'
  },
  quantity: {
    type: Number,
    required: true,
    min: 1
  },
  price: {
    type: Number,
    required: true
  },
  recurringOrder: {
    schedule: String, //"monthly", "weekly", etc.
    active: {
      type: Boolean,
      default: false
    }
  }
});

const addressSchema = new mongoose.Schema({
  country: {
    type: String,
    required: true,
    default: "Denmark"
  },
  zipCode: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  addressLine1: {
    type: String,
    required: true
  },
  addressLine2: String,
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true,
    match: /^\d{8}$/ //8 digit
  },
  email: {
    type: String,
    required: true,
    match: /^\S+@\S+\.\S+$/ //email regex validation
  },
  companyName: String,
  vatNumber: {
    type: String,
    match: /^\d{8}$/ 
  }
});

const orderSchema = new mongoose.Schema({
  items: [itemSchema],
  billingAddress: addressSchema,
  deliveryAddress: addressSchema,
  totalAmount: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    required: true,
    enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'],
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true 
});

export const Order = mongoose.model('Order', orderSchema);
