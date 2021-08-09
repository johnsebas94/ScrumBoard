const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema({ //Contruir una variable de esquema modo db
  name: String,
  description: String,
  date: { type: Date, default: Date.now },
  dbStatus: Boolean,
});

const role = mongoose.model("role", roleSchema); // Se crea el modelo
module.exports = role; // Exportar el modulo