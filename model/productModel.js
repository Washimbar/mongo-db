const mongoose = require("mongoose");
const productSchema = require("../schema/productSchema");
const Products = mongoose.model("Products", productSchema);

module.exports = Products;
