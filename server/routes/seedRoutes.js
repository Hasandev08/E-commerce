const express = require("express");
const data = require("../db");
const { Product } = require("../models/product");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    await Product.remove({});
    const createdProducts = await Product.insertMany(data.products);
    res.send({ createdProducts });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
