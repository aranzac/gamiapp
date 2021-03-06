const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Periodo = ['Infantil', 'Junior', 'Senior'];

let User = new Schema({
    nombre: {
        type: String
    },
    apellido: {
        type: String
    },
    edad: {
        type: String
    },
    rol: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    periodo: {
        type: String
    },
    nivel: {
        type: Number
    },
    nivel_anterior: {
        type: Number
    },
    puntuacion: {
        type: Number
    },
    puntuacion_anterior: {
        type: Number
    },
    tareas_resueltas: {
        type: Number
    },
    ultima_conexion: {
        type: Date
    },
    racha: {
        type: Number
    },
    puntuaciones_maximas: {
        type: Number
    },
    juegos_jugados: [String],
    logros: [Number]
}, {
    collection: 'usuarios'
});



module.exports = mongoose.model('User', User);