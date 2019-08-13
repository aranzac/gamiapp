const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Juego = new Schema({
    titulo: {
        type: String
    },
    categoria: {
        type: String
    },
    carpeta: {
        type: String
    }
}, {
    collection: 'juegos'
});


module.exports = mongoose.model('Juego', Juego);