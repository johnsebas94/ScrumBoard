const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.BD_CONNECTION, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    console.log("Connection with MongoDB: ON");
  } catch (e) {
    console.log("Error connecting to MongoDB: ", e); //Mostrar el error en consola
    throw new Error("Error connecting to MongoDB"); //Mostrar el error en el navegador
  }
};

module.exports={ dbConnection };
