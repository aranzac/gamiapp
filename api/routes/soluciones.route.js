const express = require('express');
const solucionesRoutes = express.Router();
const cors = require('cors');
const multer = require("multer");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString() + file.originalname);
    }
});

const upload = multer({
    storage: storage
});

let Soluciones = require('../models/soluciones.model');
solucionesRoutes.use(cors());

process.env.SECRET_KEY = 'secret';

solucionesRoutes.route('/add').post(function (req, res) {
    let solu = new Soluciones(req.body);
    solu.save()
        .then(() => {
            res.status(200).json({
                business: 'business in added successfully'
            });
        })
        .catch(() => {
            res.status(400).send('unable to save to database');
        });
});


// solucionesRoutes.post("/foto", upload.single('foto'), (req, res, next) => {
//     // const product = new Product({
//     //     productImage: req.file.path
//     // });
//     let foto = new Soluciones
//     product
//         .save()
//         .then(result => {
//             console.log(result);
//             res.status(201).json({
//                 message: "Created product successfully"
//                 // createdProduct: {
//                 //     name: result.name,
//                 //     price: result.price,
//                 //     _id: result._id,
//                 //     request: {
//                 //         type: 'GET',
//                 //         url: "http://localhost:3000/products/" + result._id
//                 //     }
//                 // }
//             });
//         })
//         .catch(err => {
//             res.status(500).json({
//                 error: err
//             });
//         });
// });

solucionesRoutes.route('/').post(function (req, res) {
    let creador = req.body.creador;

    Soluciones.find({
            profesor: creador
        },
        function (err, soluciones) {
            if (err) {
                res.json(err);
            } else {
                res.json(soluciones);
            }
        }
    );
});

module.exports = solucionesRoutes;