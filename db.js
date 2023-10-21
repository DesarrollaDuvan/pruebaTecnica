const mongoose = require('mongoose');

const user = "drenvio";
const password = "moM5f3AodwLE5d0A";
const dbname = "tienda_zapatillas";

try {
  mongoose.connect(`mongodb+srv://${user}:${password}@productos.r2gznev.mongodb.net/${dbname}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log('Conectado a la base de datos');
} catch (error) {
  console.error('Error al conectar a la base de datos:', error.message);
}

module.exports = mongoose.connection;