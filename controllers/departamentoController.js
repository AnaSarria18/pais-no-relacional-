const Dpto = require ("../models/departamentoModel")

const obtenerDpto= async (req, res) => {
    try{
        const departaments= await Dpto.find();
        res.json(departaments)
    }
    catch(e) {
        res.status(500).json({mensaje:"error al obtener los departamentos"})
    }
}


const crearDpto= async (req, res) => {
    try{
        const {nombre,descripcion} = req.body;
        const nuevodato= new Dpto({nombre,descripcion});
        await nuevodato.save();
        res.json({mensaje:nuevodato});

    } catch(e){
        res.status(500).json({mensaje:"error al ingresar departamento"})
    }
};



const updateDpto= async (req, res) => {
    try{
        let {id} = req.params;
        let { nombre,descripcion }= req.body
        if (!nombre || !descripcion) {
            return res.json({mensaje:"Los nombres estan vacios"})
        }
        else{
           let dptoActualizado = await Dpto.findByIdAndUpdate(id, {nombre, descripcion}, {new: true} );
           return res.json({mensaje:"Departamento Actualizado", dptoActualizado})
        }
    } catch(e){
        res.json({mensaje:"Error al Actualizar"})
    }
};




const deleteDpto = async (req, res) => {
    const { id } = req.params;
    let dptoEliminado = await Dpto.findByIdAndDelete(id)
    if(!dptoEliminado) {
        res.json({mensaje:"Departamento no encontrado"})
    }
    else{
        res.json({mensaje:"Departamento eliminado", dptoEliminado})
    }
}



module.exports = {obtenerDpto, crearDpto, updateDpto, deleteDpto}

