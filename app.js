// app.js
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();

app.set("view engine", "ejs"); // Configura EJS como motor de vistas
app.set("views", "./views"); // Especifica la carpeta donde se encuentran tus vistas EJS

app.use(express.static(path.join(__dirname, "public")));

// Conecta a la base de datos
require("./db");

// Importa el modelo de producto
const Product = require("./models/Product");
const User = require("./models/User");

// Ruta raíz para mostrar productos
app.get("/", async (req, res) => {
  res.render("index");
});

// Ruta para obtener productos en stock
app.get("/productos", async (req, res) => {
  try {
    const productsInStock = await Product.find({ inStock: true });
    res.render("products", { productsInStock }); // Renderiza la vista y pasa los datos como variables
  } catch (error) {
    res.status(500).json({ error: "Error al obtener productos en stock." });
  }
});

// Ruta para obtener el precio especial

app.get("/precio/:user_id/:nombre_producto", async (req, res) => {
  const { user_id, nombre_producto } = req.params;

  try {
    const product = await Product.findOne({ marca: nombre_producto });
    const user = await User.findOne({ user_id });

    if (!product) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    const specialPrice = user.specialPrices.find(
      (precio) =>
        precio.marca === product.marca && precio.precio < product.precio
    );

    if (specialPrice) {
      res.render("specialPrice", {
        user_id,
        nombre_producto,
        precio: specialPrice.precio,
      });
    } else {
      res.render("specialPrice", {
        user_id,
        nombre_producto,
        precio: product.precio,
      });
    }
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el precio del producto" });
  }
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor Express en ejecución en el puerto ${PORT}`);
});
