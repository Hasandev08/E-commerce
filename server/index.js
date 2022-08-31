const cruds = require("./routes/cruds")
const mongoose = require("mongoose");
const cors = require("cors")
const express = require("express");
const app = express();

mongoose
  .connect("mongodb://localhost:27017/e-commerce")
  .then(() => console.log("Connected to mongodb..."))
  .catch((err) => console.error("Could not connect to mongodb", err));

app.use(cors());
app.use(express.json());
app.use(cruds)

const port = 5000;

app.listen(port, () => console.log(`Listening on port ${port}...`));
