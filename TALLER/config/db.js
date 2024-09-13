const mongoose = require('mongoose')

const conexionDB = async () => {
    try{
       await mongoose.connect(process.env.DB_MONGO,{
        useNewUrlParser: true,
        useUnifiedTopology: true
       });
        console.log("Conectada a la base de datos MongoDB");

    }catch(e){
        console.log("Error al conectar", e)
    }
};

module.exports = conexionDB;