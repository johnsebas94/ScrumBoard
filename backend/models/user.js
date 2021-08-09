const mongoose = require("mongoose"); //Libreria para crear el esquema
const jwt = require("jsonwebtoken"); //Para seguridad de información 
const moment = require("moment"); //Para fechas

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    roleId: { type: mongoose.Schema.ObjectId, ref: "role"}, //Tipo de data ObjectID que maneja mongo db y no js y apunta a la coleecion role
    date: {type: Date, default: Date.now},
    dbStatus: Boolean,
});

userSchema.methods.generateJWT = function () { // Modelo para generar un token
    return jwt.sign( //Se encarga de encriptar en el Payload
    { 
        _id: this._id,
        name: this.name,
        iat: moment().unix(), //No es necesario pero hace mas segura nuestra aplicacion
    },
    process.env.SECRET_KEY_JWT
    );
};

const user = mongoose.model("user", userSchema) //Guardar los datos en la colecciony llevarlos a mongodb
module.exports = user; //Exportamos el modulo

