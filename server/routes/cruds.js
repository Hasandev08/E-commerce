const express = require("express");
const data = require("../db");
const router = express.Router();

router.get("/api/products", (req, res) => {
  res.send(data.products);
});

router.get("/api/products/:slug", (req, res) => {
  const { slug } = req.params;

  const product = data.products.find((x) => x.slug === slug);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product not found" });
  }
});

module.exports = router;
