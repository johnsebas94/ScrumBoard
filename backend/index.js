//Modulos
const express = require("express"); //Para el servidor
const cors = require("cors"); // Para las reglas  de conexiones con el backend del frontend
const{ dbConnection } = require ("./db/db")
require("dotenv").config(); //Configurar las variables de entorno

//Crear aplicacion
const app = express();

app.use(express.json()); //Todo lo que manipula el servidor sera JSON
app.use(cors());

//Escuchar el puerto 3001
app.listen(process.env.PORT, () => console.log("Backend server running OK on port: ", process.env.PORT));

//Conectar a la base de datos
dbConnection();