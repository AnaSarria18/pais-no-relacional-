const mongoose = require('mongoose')
const { type } = require('os')

const MunicipioSchema= new mongoose.Schema({
    nombre:{
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: false
    }
});

const Municipio = mongoose.model('municipio', MunicipioSchema);

module.exports = Municipio;
