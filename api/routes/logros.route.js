const express = require('express');
const logrosRoutes = express.Router();

let Logro = require('../models/logros.model');

logrosRoutes.route('/add').post(function (req, res) {
    // const logros = {
    //     inx: 15,
    //     titulo: "Premio a la perseverancia",
    //     descripcion: "Por conectarte un mes seguido",
    //     imagen: "https://firebasestorage.googleapis.com/v0/b/gami-314da.appspot.com/o/logros%2F15.png?alt=media&token=efec863e-e14f-4844-ad35-03fac46b33ad"
    // }
    // Logro.create(logros)
    //     .then(user => {
    //         res.json({
    //             status: user.email + ' registered'
    //         })
    //     })
    //     .catch(err => {
    //         res.send('error: ' + err)
    //     })

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