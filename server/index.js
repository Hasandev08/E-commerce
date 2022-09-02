const products = require("./routes/products");
const seedRouter = require("./routes/seedRoutes");
const carts = require("./routes/carts");
const mongoose = require("mongoose");
const cors = require("cors");
const express = require("express");
const app = express();

mongoose
  .connect("mongodb://localhost:27017/e-commerce")
  .then(() => console.log("Connected to mongodb..."))
  .catch((err) => console.error("Could not connect to mongodb", err));

app.use(cors());
app.use(express.json());
app.use("/api/seed", seedRouter);
app.use(carts);
app.use(products);

const port = 5000;

app.listen(port, () => console.log(`Listening on port ${port}...`));
