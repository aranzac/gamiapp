const express = require('express');
const userRoutes = express.Router();
const cors = require('cors');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

let User = require('../models/user.model');
userRoutes.use(cors());

process.env.SECRET_KEY = 'secret'

userRoutes.route('/add').post(function (req, res) {

    var periodo = ""
    if (5 <= req.body.edad && req.body.edad <= 8) periodo = "Infantil";
    if (9 <= req.body.edad && req.body.edad <= 12) periodo = "Junior";
    if (13 <= req.body.edad && req.body.edad <= 16) periodo = "Senior";
    if (req.body.edad == 0) periodo = "Pro";

    const userData = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.email,
        password: req.body.password,
        rol: req.body.rol,
        edad: req.body.edad,
        periodo: periodo,
        nivel: 1,
        puntuacion: 0
    }
    User.findOne({
            email: req.body.email
        })
        .then(user => {
            if (!user) {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    userData.password = hash
                    User.create(userData)
                        .then(user => {
                            res.json({
                                status: user.email + ' registered'
                            })
                        })
                        .catch(err => {
                            res.send('error: ' + err)
                        })
                })
            } else {
                res.json({
                    error: 'User already exists'
                })
            }
        })
        .catch(err => {
            res.json('error: ' + err)
        })

});


userRoutes.route('/login').post(function (req, res) {

    User.findOne({
            email: req.body.email
        })
        .then(user => {
            if (user) {
                if (bcrypt.compareSync(req.body.password, user.password)) {
                    const payload = {
                        _id: user._id,
                        nombre: user.nombre,
                        apellido: user.apellido,
                        email: user.email,
                        rol: user.rol,
                        edad: user.edad,
                        periodo: user.periodo,
                        nivel: user.nivel,
                        puntuacion: user.puntuacion
                    }

                    let token = jwt.sign(payload, process.env.SECRET_KEY, {
                        expiresIn: 1800
                    })
                    res.send(token);
                } else {
                    res.json({
                        error: '1'
                    })
                }
            } else {
                res.json({
                    error: '2'
                })
            }
        })
        .catch(err => {
            res.send('error: ' + err)
        })
})

// Lista solo los alumnos para el ranking
userRoutes.route('/').get(function (req, res) {

    User.find({
        rol: "alumno"
    }, function (err, usuarios) {
        if (err) {
            res.json(err);
        } else {
            res.json(usuarios);
        }
    });
});


userRoutes.route('/profile').post(function (req, res) {
    User.findById({
        _id: req.body._id
    }, function (err, usuarios) {
        if (err) {
            res.json(err);
        } else {
            console.log(usuarios);
            res.send(usuarios);
        }
    });
});


userRoutes.route('/:id').get(function (req, res) {
    let id = req.params.id;
    User.findById(id, function (err, usuarios) {
        if (err) {
            res.json(err);
        } else {
            res.json(usuarios);
        }
    });
});

// Defined edit route
userRoutes.route('/edit/:id').get(function (req, res) {
    let id = req.params.id;
    User.findById(id, function (err, user) {
        if (err) {
            res.json(err);
        }
        res.json(user);
    });
});

//  Defined update route
userRoutes.route('/update/:id').post(function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (!user)
            res.status(404).send("data is not found");
        else {
            user.nombre = req.body.nombre;
            user.apellido = req.body.apellido;

            user.save().then(() => {
                    res.json('Update complete');
                })
                .catch(() => {
                    res.status(400).send("unable to update the database");
                });
        }
    });
});

// Defined delete | remove | destroy route
userRoutes.route('/delete/:id').delete(function (req, res) {
    User.findByIdAndRemove({
        _id: req.params.id
    }, function (err) {
        if (err) res.json(err);
        else res.json('Successfully removed');
    });
});




module.exports = userRoutes;