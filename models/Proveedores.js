const mongoose = require('mongoose');

// Este modelo debe ser igual a lo que tenga la BD

const proveedorSchema = mongoose.Schema({

    nombres: {
        type: String,
        required: true,
    },
    empresa: {
        type: String,
        required: true,
    },
    cedula: {
        type: Number,
        required: true,
    },
    correo: {
        type: String,
        required: true,
    },
    telefono: {
        type: Number,
        required: true,
    },
    direccion: {
        type: String,
        required: true,
    },

}, { versionKey: false });

module.exports = mongoose.model('Proveedores', proveedorSchema);