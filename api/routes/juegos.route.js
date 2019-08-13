const express = require('express');
const juegosRoutes = express.Router();

let Juego = require('../models/juegos.model');

juegosRoutes.route('/add').post(function (req, res) {
    const juego = {
        titulo: req.body.titulo,
        categoria: req.body.categoria,
        carpeta: req.body.carpeta
    }
    Juego.create(juego).then(juego => {
            res.json({
                status: juego.titulo + ' registered'
            })
        })
        .catch(err => {
            res.send('error: ' + err)
        })
});

juegosRoutes.route('/').get(function (req, res) {
    Juego.find(function (err, juegos) {
        if (err) {
            res.json(err);
        } else {
            res.json(juegos);
        }
    });
});
juegosRoutes.route('/:id').get(function (req, res) {
    Juego.findOne({
            _id: req.params.id
        })
        .then(function (err, juego) {
            if (err) {
                res.json(err);
            } else {
                console.log(juego)
                res.json(juego);
            }
        });
});

module.exports = juegosRoutes;