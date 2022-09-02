const express = require("express");
const { Product } = require("../models/product") 
const router = express.Router();

router.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find()
    res.status(201).send(products)
  } catch (error) {
    res.status(404).send(error)
  }
});

router.get("/api/products/:id", async (req, res) => {
  const { id } = req.params
  try {
    const product = await Product.findById({ _id: id})
    res.status(201).send(product)
  } catch (error) {
    res.status(404).send(error)
  }
});

module.exports = router;
