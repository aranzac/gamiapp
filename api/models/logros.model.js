const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Logro = new Schema({
    inx: {
        type: Number
    },
    titulo: {
        type: String
    },
    imagen: {
        type: String
    },
    descripcion: {
        type: String
    },
    necesita: {
        type: String
    }
}, {
    collection: 'logros'
});


module.exports = mongoose.model('Logro', Logro);