const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
    const token = req.header("x-auth-token");

    //Revisamos si tenemos un token 
    if (!token) {
        return res.status(400).json({ msg: "Permiso no valido, no hay token" });
    }

    // Validar token 
    try {
        const cifrado = jwt.verify(token, process.env.SECRETA);
        req.usuario = cifrado.usuario;
        next();
    } catch (error) {
        res.status(400).json({ msg: "Token no valido" });
    }
};