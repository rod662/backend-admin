const Producto = require('../models/Producto');

// Agregar producto 
exports.agregarProducto = async (req, res) => {
    try {
        let productos = new Producto(req.body);
        await productos.save();
        res.send(productos);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al agregar el producto');
    }
};

// Mostrar Productos
exports.mostrarProductos = async (req, res) => {
    try {
        const productos = await Producto.find();
        res.json({ productos }); // Enviamos un objeto con una clave "productos"
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al mostrar los productos');
    }
};

// Mostrar un Producto 
exports.mostrarunProducto = async (req, res) => {
    try {
        let productos = await Producto.findById(req.params.id);
        if (!productos) {
            res.status(404).json({ msg: "No se encuentra el producto con ese ID" });
        } else {
            res.send(productos);
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al mostrar el producto');
    }
};

// Eliminar un producto 
exports.eliminarProductos = async (req, res) => {
    try {
        let productos = await Producto.findById(req.params.id);
        if (!productos) {
            res.status(404).json({ msg: 'El producto no existe' });
            return;
        }
        await productos.deleteOne({ _id: req.params.id });
        res.json({ msg: 'El producto fue eliminado' });
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al eliminar el producto' + error.message);
    }
};

// Modificar Producto
exports.modificarProducto = async (req, res) => {
    try {
        const producto = await Producto.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!producto) {
            return res.status(404).send('Producto no encontrado');
        }
        res.json({ msg: 'Se ha modificado el producto', producto });
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al modificar el producto');
    }
};