const Dpto = require ("../models/departamentoModel")

const obtenerDpto= async (req, res) => {
    try{
        const departaments= Dpto.find();
        res.json(departaments)
    }
    catch(e) {
        res.status(500).json({mensaje:"error al obtener los departamentos"})
    }
}


const crearDpto= async (req, res) => {
    try{
        const {nombre} = req.body;
        const nuevodato= new Dpto({nombre});
        await nuevodato.save();
        res.json({mensaje:nuevodato});

    } catch(e){
        res.status(500).json({mensaje:"error al ingresar departamento"})
    }
};


module.exports = {obtenerDpto, crearDpto}