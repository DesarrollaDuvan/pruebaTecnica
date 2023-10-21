const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  user_id: String,
  nombre: String,
  specialPrices: [
    {
      marca: String,
      precio: Number,
    },
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
