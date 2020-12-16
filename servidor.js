const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const connectDB = require("./config/db");

// Trae la configuración del archivo .env
dotenv.config( { path: "./config/config.env" } );

connectDB();

const transacciones = require("./rutas/transacciones");

const app = express();

app.use(express.json());

if (process.env.NODE_ENV === "development"){
    app.use(morgan("dev"));
}

// Cada vez que se haga una request en api/v1/trans, hara un route a transacciones
app.use("/api/v1/transacciones", transacciones);

// Esto busca el puerto del config y si no funciona, usa el puerto 5000
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(` Servidor corriendo en modo ${process.env.NODE_ENV} en el puerto ${PORT}`.blue.bold));


 