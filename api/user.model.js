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
    }
}, {
        collection: 'usuarios'
    });



module.exports = mongoose.model('User', User);