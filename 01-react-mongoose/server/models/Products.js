const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
  name: String,
  description: String,
  img: String,
  price: { type: Number, min: [0, "Minimum price is 0"] },
  qty: { type: Number, min: [0, "Minimum quantity is 0"] },
});

const Products = mongoose.model("Products", productsSchema);

module.exports = Products;
