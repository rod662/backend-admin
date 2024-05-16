const express = require ("express");
const router = express.Router();
const { check } = require ("express-validator");
const authController = require ("../controllers/authController");
const auth = require ("../middleware/auth");

// autenticar un usuario // apli/auth

router.post(
"/", [
    check("email", "Digite un email valido").isEmail(),
    check("password", "La contraseña debe tener al menos 8 caracteres").isLength({min: 8,}),

],
authController.autenticarUsuario
);

router.get("/", auth, authController.usuarioAutenticado);

module.exports = router;
