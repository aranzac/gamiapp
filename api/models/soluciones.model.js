const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Soluciones = new Schema({
    id_alumno: {
        type: String
    },
    alumno: {
        type: String
    },
    profesor: {
        type: String
    },
    titulo: {
        type: String
    },
    descripcion: {
        type: String
    },
    foto: {
        type: String
    },
    opinion: {
        type: String
    },
    feedback: {
        type: String
    },
    corregido: {
        type: Boolean
    }
}, {
    collection: 'soluciones'
});


module.exports = mongoose.model('Soluciones', Soluciones);