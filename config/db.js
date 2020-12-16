const mongoose = require("mongoose");

const connectDB = async () => {
    try{
        const conn=await mongoose.connect(process.env.MONGO_URI, { //busca la DB en el archivo env
            useNewUrlParser:true, //para evitar errores al conectarse a la DB
            useCreateIndex: true,
            useUnifiedTopology: true
        });


        console.log(`MongoDB conectada: ${conn.connection.host}`.yellow.underline.bold);
    } catch (err) {
        console.log(`Error: ${err.message}`.bold.red);
        process.exit(1);
    }
}

module.exports = connectDB;