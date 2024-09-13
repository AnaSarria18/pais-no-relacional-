const mongoose = require('mongoose')

const conexionDB = async () => {
    try{
        mongoose.connect('mongodb+srv://maria:maria@cluster0.q92cait.mongodb.net/Pais?retryWrites=true&w=majority&appName=Cluster0');
        console.log("Conectada a la base de datos");

    }catch(e){
        console.log("Error al conectar", e)
    }
};

module.exports = conexionDB;

