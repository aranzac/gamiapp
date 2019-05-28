const express = require('express');
const userRoutes = express.Router();

let User = require('./user.model');

// Defined store route
userRoutes.route('/add').post(function (req, res) {
    let user = new User(req.body);
    user.save()
        .then(() => {
            res.status(200).json({ 'business': 'business in added successfully' });
        })
        .catch(() => {
            res.status(400).send("unable to save to database");
        });
});

// Defined get data(index or listing) route
userRoutes.route('/').get(function (req, res) {
    User.find(function (err, usuarios) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(usuarios);
        }
    });
});

userRoutes.route('/:id').get(function (req, res) {
    let id = req.params.id;
    User.findById(id, function (err, usuarios) {
        if (err) {
            res.json(err);
        }
        else {
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
    User.findByIdAndRemove({ _id: req.params.id }, function (err) {
        if (err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = userRoutes;