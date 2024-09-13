const Municip = require ("../models/municipioModel")

const obtenerMunicip= async (req, res) => {
    try{
        const municipality=await Municip.find();
        res.json(municipality)
    }
    catch(e) {
        res.status(500).json({mensaje:"error al obtener los municipios"})
    }
}



const crearMunicip= async (req, res) => {
    try{
        const {nombre, descripcion} = req.body;
        const nuevodato= new Municip({nombre, descripcion});
        await nuevodato.save();
        res.json({mensaje:nuevodato});

    } catch(e){
        res.status(500).json({mensaje:"error al ingresar Municipio"})
    }
};




const updateMunicip= async (req, res) => {
    try{
        let {id} = req.params;
        let { nombre,descripcion }= req.body
        if (!nombre || !descripcion) {
            return res.json({mensaje:"Los nombres estan vacios"})
        }
        else{
           let municipActualizado = await Municip.findByIdAndUpdate(id, {nombre, descripcion} );
           return res.json({mensaje:"Municipio Actualizado", municipActualizado})
        }
    } catch(e){
        res.json({mensaje:"Error al Actualizar"})
    }
};




const deleteMunicip = async (req, res) => {
    const { id } = req.params;
    let municipEliminado = await Municip.findByIdAndDelete(id)
    if(!municipEliminado) {
        res.json({mensaje:"Municipio no encontrado"})
    }
    else{
        res.json({mensaje:"Municipio eliminado", municipEliminado})
    }
}



module.exports = {obtenerMunicip, crearMunicip, updateMunicip, deleteMunicip}