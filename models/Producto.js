const mongoose = require ('mongoose');

const productoSchema = mongoose.Schema({

    nombre: {
        type: String,
        require: true,
    },
    tipo: {
        type: String,
        require: true,
    },
    cantidad: {
        type: Number,
        require: true,
    },
    precio: {
        type: Number,
        require: true,
    }
    
}, {versionkey: false});
    
    module.exports = mongoose.model('Producto', productoSchema);