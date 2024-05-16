const express = require("express");
const conectarBD = require("./config/db");
const cors = require ("cors");


const app = express();

const PORT = process.env.PORT || 5000;

// conectar BD

conectarBD();

//habilitar cors
app.use(cors());

//Habilitar express json
app.use(express.json({ extended:true }));

// creamos las rutas 

app.use("/api/usuarios", require("./routes/usuarios"));
app.use("/api/clientes", require("./routes/routescliente"));
app.use("/api/productos", require("./routes/routesproducto"));
app.use("/api/proveedores", require("./routes/routesproveedor"));
app.use("/api/auth", require("./routes/auth"));

// Configuracion del servidor 

app.listen(PORT, () => {
    console.log("El servidor está conectado")
});


