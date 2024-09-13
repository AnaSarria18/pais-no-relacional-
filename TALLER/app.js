const express = require('express');
const app= express();
const conexionDB = require("./config/db");
const juegoRoutes= require('./routes/juegoRoutes')
require('dotenv').config() /* cargar las variables de entorno al archivo*/
app.use(express.json());
conexionDB();


//Rutas de API
app.use('/api', juegoRoutes);



// Escuchando el puerto 4000
const port = process.env.port
app.listen(port, () => {
    console.log("servidor corriendo en puerto 3000")
});
