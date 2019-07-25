const express = require('express');
const logrosRoutes = express.Router();

let Logro = require('../models/logros.model');

logrosRoutes.route('/add').post(function (req, res) {
    const logros = {
        // inx: 15,
        // titulo: "Pro de los algoritmos",
        // descripcion: "Por obtener 3 calificaciones perfectas en actividades de la categoría Algoritmos",
        // imagen: "https://firebasestorage.googleapis.com/v0/b/gami-314da.appspot.com/o/logros%2Falgo.png?alt=media&token=ffa107b1-eedb-4dd2-8b38-d9c105431a36"
    }
    Logro.create(logros)
        .then(user => {
            res.json({
                status: user.email + ' registered'
            })
        })
        .catch(err => {
            res.send('error: ' + err)
        })

});

logrosRoutes.route('/').get(function (req, res) {
    Logro.find(function (err, logros) {
        if (err) {
            res.json(err);
        } else {
            res.json(logros);
        }
    });
});

logrosRoutes.route('/ver').post(function (req, res) {
    var array = req.body.logros;

    Logro.find({
        inx: {
            $in: array
        }
    }, function (err, logros) {
        if (err) {
            res.json(err);
        } else {
            res.json(logros);
        }
    });

})

module.exports = logrosRoutes;