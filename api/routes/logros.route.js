const express = require('express');
const logrosRoutes = express.Router();

let Logro = require('../models/logros.model');

logrosRoutes.route('/add').post(function (req, res) {
    const logros = {
        inx: 16,
        titulo: "En la diana",
        descripcion: "Por haber obtenido 5 puntuaciones perfectas en juegos",
        imagen: "https://firebasestorage.googleapis.com/v0/b/gami-314da.appspot.com/o/logros%2F16.png?alt=media&token=9c5b01b2-7a61-4977-9ae2-93685f04676b"
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