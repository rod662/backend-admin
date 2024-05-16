

const Proveedor = require ('../models/Proveedores');



exports.agregarProveedor = async(req, res) => {
    try {
        let proveedores = new Proveedor(req.body)
        await proveedores.save();
        res.send(proveedores);
    } catch(error) {
        console.log(error)
        res.status(500).send('Hubo un error al agregar el proveedor')
    }
}

// Mostrar 

exports.mostrarProveedores = async (req, res) => {
    try {
        
        const proveedores = await Proveedor.find();
        res.json({proveedores});


    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al agregar el proveedor')
    }
};

// mostrar un 

exports.mostrarunProveedor = async (req, res) => {
    try {
        let proveedores = await Proveedor.findById(req.params.id);
        if(!proveedores) {
            res.status(404).json({msg: "No se encuentra el proveedor con ese ID"});
        } res.send(proveedores);

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al mostrar el proveedor')
    }
}

// Eliminar 

exports.eliminarProveedor = async (req, res) => {
    try {
        let proveedores = await Proveedor.findById(req.params.id);
        if(!proveedores) {
            res.status(404).json({msg: 'El proveedor no existe'});
            return
        } await proveedores.deleteOne({_id: req.params.id})
        res.json({msg: 'El proveedor fue eliminado'});

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al eliminar el proveedor'  + error.mesage)
    }
}

// Modificar 

exports.modificarProveedor = async (req, res) => {
    try {
        const proveedor = await Proveedor.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!proveedor) {
            return res.status(404).send('Proveedor no encontrado');
        }
        res.json({ msg: 'Se ha modificado el proveedor', proveedor });
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al modificar el proveedor');
    }
};