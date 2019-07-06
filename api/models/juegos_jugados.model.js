const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Jugados = new Schema({
    usuario: {
        type: String
    },
    juego: {
        type: String
    },
    nivel_jugado: {
        type: Number
    },
    puntuacion: {
        type: Number
    },
    puntos: {
        type: Number
    }
}, {
    collection: 'juegos_jugados'
});

module.exports = mongoose.model('Jugados', Jugados);