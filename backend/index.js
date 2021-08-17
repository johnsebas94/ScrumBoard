//Modulos
const express = require("express"); //Para el servidor
const cors = require("cors"); // Para las reglas  de conexiones con el backend del frontend
const{ dbConnection } = require ("./db/db");
const Role  = require("./routes/role")
const User = require("./routes/user")
const Auth = require("./routes/auth");
const Board = require("./routes/board");
require("dotenv").config(); //Configurar las variables de entorno

//Crear aplicacion
const app = express();

app.use(express.json()); //Todo lo que manipula el servidor sera JSON
app.use(cors());
app.use("/api/role", Role);
app.use("/api/user", User);
app.use("/api/auth", Auth);
app.use("/api/board", Board);

//Escuchar el puerto 3001
app.listen(process.env.PORT, () => console.log("Backend server running OK on port: ", process.env.PORT));

//Conectar a la base de datos
dbConnection();