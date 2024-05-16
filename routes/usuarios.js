const express = require ("express");
const router = express.Router();
const { check } = require ("express-validator");
const usuariosController = require ("../controllers/usuariosController");


router.post(
    "/", [
        check("nombre", "El nombre es obligatorio").not().isEmpty(),
        check("email", "Agregue un correo valido").isEmail(),
        check("password", "La contraseña debe tener minimo 8 caracteres").isLength({min: 8,})
    ],
    usuariosController.crearUsuario
);

module.exports = router;