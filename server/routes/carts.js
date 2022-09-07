const express = require("express");
const { Cart } = require("../models/cart");
const router = express.Router();

router.get("/api/cart", async (req, res) => {
  try {
    const cart = await Cart.find();
    res.status(201).send(cart);
  } catch (error) {
    res.status(404).send(error);
  }
});

router.post("/api/cart", async (req, res) => {
  const { name, image, price, countInStock, numberOfOrders } = req.body;

  if (!name || !image || !price || !countInStock || !numberOfOrders) {
    res.status(404).send({ message: "Product not added" });
  }
  try {
    let cart = await Cart.create({
      name,
      image,
      price,
      countInStock,
      numberOfOrders,
    });

    // cart = await cart.save();
    res.status(201).send(cart);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
