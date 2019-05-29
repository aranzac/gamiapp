const express = require('express');
const tareaRoutes = express.Router();

let Tarea = require('./tarea.model');

// Defined store route
tareaRoutes.route('/add').post(function (req, res) {
    let tarea = new Tarea(req.body);
    tarea.save()
        .then(() => {
            res.status(200).json({ 'business': 'business in added successfully' });
        })
        .catch(() => {
            res.status(400).send("unable to save to database");
        });
});

// Defined get data(index or listing) route
tareaRoutes.route('/').get(function (req, res) {
    Tarea.find(function (err, tareas) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(tareass);
        }
    });
});

// Defined edit route
tareaRoutes.route('/edit/:id').get(function (req, res) {
    let id = req.params.id;
    Tarea.findById(id, function (err, tarea) {
        if (err) {
            res.json(err);
        }
        res.json(tarea);
    });
});

//  Defined update route
tareaRoutes.route('/update/:id').post(function (req, res) {
    Tarea.findById(req.params.id, function (err, tarea) {
        if (!tarea)
            res.status(404).send("data is not found");
        else {
            tarea.titulo = req.body.titulo;
            tarea.descripcion = req.body.descripcion;
            tarea.save().then(() => {
                res.json('Update complete');
            })
                .catch(() => {
                    res.status(400).send("unable to update the database");
                });
        }
    });
});

// Defined delete | remove | destroy route
tareaRoutes.route('/delete/:id').delete(function (req, res) {
    Tarea.findByIdAndRemove({ _id: req.params.id }, function (err) {
        if (err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = tareaRoutes;