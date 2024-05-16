const express = require ('express');
const router = express.Router();
const ClienteController = require ('../controllers/ClienteController');

router.post('/', ClienteController.agregarClientes);
router.get('/', ClienteController.mostrarClientes);
router.get('/:id', ClienteController.mostrarunCliente);
router.delete('/:id', ClienteController.eliminarClientes);
router.put('/:id', ClienteController.modificarCliente);

module.exports = router;