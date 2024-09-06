const Municip = require ("../models/municipioModel")

const obtenerMunic= async (req, res) => {
    try{
        const municipality= Municip.find();
        res.json(municipality)
    }
    catch(e) {
        res.status(500).json({mensaje:"error al obtener los municipios"})
    }
}


module.exports = {obtenerMunic}