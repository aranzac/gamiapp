const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TareasRealizadas = new Schema({
    usuario: {
        type: String
    },
    titulo: {
        type: String
    },
    puntuacion: {
        type: Number
    },
    validada: {
        type: Boolean
    }
}, {
    collection: 'tareas_realizadas'
});

module.exports = mongoose.model('TareasRealizadas', TareasRealizadas);