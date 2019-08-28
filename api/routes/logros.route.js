const express = require('express');
const logrosRoutes = express.Router();

let Logro = require('../models/logros.model');

logrosRoutes.route('/add').post(function (req, res) {
    const logros = {
        inx: 17,
        titulo: "Pro del Pensamiento Computacional",
        descripcion: "Por haber obtenido 15 puntuaciones perfectas en juegos",
        imagen: "https://firebasestorage.googleapis.com/v0/b/gami-314da.appspot.com/o/logros%2F17.png?alt=media&token=e7d91033-ca00-4aee-8f39-5db9c20ca70c"
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