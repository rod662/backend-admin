const express = require ('express');
const router = express.Router();
const Proveedorcontroller = require ('../controllers/Proveedorcontroller');

router.post('/', Proveedorcontroller.agregarProveedor);
router.get('/', Proveedorcontroller.mostrarProveedores);
router.get('/:id', Proveedorcontroller.mostrarunProveedor);
router.delete('/:id', Proveedorcontroller.eliminarProveedor);
router.put('/:id', Proveedorcontroller.modificarProveedor);

module.exports = router;