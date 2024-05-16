const Usuario = require("../models/Usuario");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

exports.autenticarUsuario = async (req, res) => {
    // revisar errores 
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({ errores: errores.array() });
    }

    const { email, password } = req.body;

    try {
        let usuario = await Usuario.findOne({ email });
        if (!usuario) {
            return res.status(400).json({ msg: "El usuario no está registrado" });
        }
        // revisar contraseña
        const passCorrecto = await bcryptjs.compare(password, usuario.password);
        if (!passCorrecto) {
            return res.status(400).json({ msg: "La contraseña es incorrecta" });
        }

        // SI esta bien se firma el token 
        const payload = {
            usuario: { id: usuario.id },
        };
        jwt.sign(
            payload,
            process.env.SECRETA,
            {
                expiresIn: 43200,
            },
            (error, token) => {
                if (error) throw error;
                //Mensaje de confirmacion
                res.json({ token });
            }
        );
    } catch (error) {
        console.log("Hubo un error");
        console.log(error);
        res.status(400).send("Hubo un error");
    }
};

exports.usuarioAutenticado = async (req, res) => {
    try {
        const usuario = await Usuario.findById(req.usuario.id);
        res.json({ usuario });
    } catch (error) {
        res.status(400).json({ msg: "Hubo un error" });
    }
};