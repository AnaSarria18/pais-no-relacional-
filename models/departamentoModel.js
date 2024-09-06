const mongoose = require('mongoose')
const { type } = require('os')

const DepartamentoSchema= new mongoose.Schema({
    nombre:{
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: false
    }
});

const Departamento = mongoose.model('departamento', DepartamentoSchema);

module.exports = Departamento;
