let mongoose = require('mongoose');

const JugadorSchema = new mongoose.Schema({
    alias: {
        type: String,
        required: true
      },
      puntaje: {
        type: Number,
        required: false
      }
});


const JuegoSchema = new mongoose.Schema({
    nombre: {
      type: String,
      required: true
    },
    jugadores: {
        type:[JugadorSchema],
        validate:[arrayLimit,"Es necesario al menos un jugador"]
    }
});

function arrayLimit(num){
    return num.length>0  /* minimo 1 */
}



// Crear el modelo a partir del esquema
const juego = mongoose.model('juego', JuegoSchema);
  
module.exports = juego;
