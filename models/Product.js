// models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  nombre: String,
  inStock: Boolean,
  marca: String,
  precio: Number,
  specialPrice: Number
});

const Product = mongoose.model('Producto', productSchema);

module.exports = Product;
