const mongoose = require('mongoose')

const conexionDB = async () => {
    try{
        mongoose.connect('mongodb+srv://maria:1059594660@cluster0.q92cait.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Conectada a la base de datos");

    }catch(e){
        console.log("Error al conectar", e)
    }
};

module.exports = conexionDB;

