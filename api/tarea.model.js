const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Tarea = new Schema({
    titulo: {
        type: String
    },
    descripcion: {
        type: String
    },
    dificultad: {
        type: String
    },
    categoria: {
        type: String
    },
    creador: {
        type: String
    }
}, {
        collection: 'tareas'
    });



module.exports = mongoose.model('Tarea', Tarea);