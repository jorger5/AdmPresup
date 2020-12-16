const mongoose = require("mongoose");

const TransaccionSchema = new mongoose.Schema({
    descripcion: {
        type: String,
        trim: true,
        required: true 
    },
    categoria: {
        type: String,
        required: true,
    },
    monto:{
        type: Number,
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Transaccion", TransaccionSchema);