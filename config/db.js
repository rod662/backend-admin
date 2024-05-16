    const mongoose = require ("mongoose");
    require ("dotenv").config({path:".env"});

    const conectarBD = async () => {
        mongoose
        .connect(process.env.MONGO_URL)
        .then(()=>console.log('estamos conectados con MongoDB'))
        .catch((err)=> console.error(err));

    };

    module.exports = conectarBD;