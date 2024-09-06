const express = require('express');
const app= express();
const port=4000;
const connexionDB = require("./config/db");
const departamentoRoutes = require('./routes/departamentoRoutes')
const municipioRoutes = require('./routes/municipioRoutes') 
app.use(express.json());

//Rutas de API
app.use('/api', departamentoRoutes);
app.use('/api', municipioRoutes);


// Escuchando el puerto 4000
app.listen(port, () => {
    console.log("servidor corriendo en puerto 4000")
});