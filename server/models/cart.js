const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  countInStock: {
    type: Number,
    required: true,
  },
  numberOfOrders: {
    type: Number,
    required: true,
  },
});

const Cart = mongoose.model("Cart", cartSchema);

exports.Cart = Cart;
