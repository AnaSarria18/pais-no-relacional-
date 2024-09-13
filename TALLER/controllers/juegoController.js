const juego = require ("../models/juegoModel");

const obtenerjuego= async (req, res) => {
    try{
        const juegos= await juego.find();
        res.json(juegos)
    }
    catch(e) {
        res.status(500).json({mensaje:"error al obtener los juegos"})
    }
};


const crearjuego= async (req, res) => {
    try{
        const { nombre, jugadores } = req.body;
        const nuevojuego= new juego({ nombre, jugadores });
        await nuevojuego.save();
        res.json({mensaje:nuevojuego});


        
    } catch(e){
        res.status(500).json({mensaje:"error al ingresar juego"})
    }
};



const updatejuego= async (req, res) => {
    try{
        let {id} = req.params;
        let { nombre,jugadores }= req.body
        if (!nombre || !jugadores) {
            return res.json({mensaje:"Los nombres estan vacios"})
        }
        else{
           let juegoActualizado = await juego.findByIdAndUpdate(id, {nombre, jugadores}, {new: true} );
           return res.json({mensaje:"Juego Actualizado", juegoActualizado})
        }
    } catch(e){
        res.json({mensaje:"Error al Actualizar"})
    }
};




const deletejuego = async (req, res) => {
    const { id } = req.params;
    let juegoEliminado = await juego.findByIdAndDelete(id)
    if(!juegoEliminado) {
        res.json({mensaje:"juego no encontrado"})
    }
    else{
        res.json({mensaje:"Juego eliminado", juegoEliminado})
    }
}



/* sumar los puntajes de cada juego */

const sumadePuntajes = async (req, res) => {
    try{
        const { id } = req.params;
        const juegoE = await juego.findById(id);

        if (!juegoE){
            return res.json({mensaje:"no hay juegos"});
        }

        const totalPuntaje = juegoE.jugadores.reduce((total, jugador) => {
            return total + jugador.puntaje 
        });

        res.json({ mensaje: "El puntaje total del juego es : ${totalPuntaje}", totalPuntaje});
    }catch (e) {
        res.status(500).json({mensaje: "Error al calcular el puntaje total"})
    }
};



module.exports = {obtenerjuego, crearjuego, updatejuego, deletejuego, sumadePuntajes};