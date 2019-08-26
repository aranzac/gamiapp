const express = require('express');
const app = express();
const solucionesRoutes = express.Router();
const cors = require('cors');
const multer = require('multer');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
var fileupload = require('express-fileupload');
app.use(
  fileupload({
    useTempFiles: true
  })
);

// var cloudinary = require('cloudinary').v2;

// cloudinary.config({
//   cloud_name: 'soluciones',
//   api_key: '258673781426355',
//   api_secret: 'c-XJCn-rD8BpJUeZq9vVJ2iqOkE'
// });

// const cloudinaryLib = {
//   Cloudinary: cloudinary
// }

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
  console.log(req.body)
  console.log("hola")
  let solu = new Soluciones(req.body);
  solu.corregido = false;
  solu
    .save()
    .then(() => {
      res.status(200).json({
        business: 'business in added successfully'
      });
    })
    .catch(() => {
      res.status(400).send('unable to save to database');
    });
});

solucionesRoutes.post('/foto', function (req, res, next) {
  const file = req.body;
});

solucionesRoutes.post('/marcar', function (req, res, next) {
  Soluciones.findById({
      _id: req.body._id
    },
    function (err, solucion) {
      if (err) {
        res.json(err);
      } else {
        solucion.corregido = true;
        solucion.save().then(() => {
            res.json('Update complete');
          })
          .catch(() => {
            res.status(400).send("unable to update the database");
          });
      }
    });
});

solucionesRoutes.route('/').post(function (req, res) {
  let creador = req.body.creador;

  Soluciones.find({
      profesor: creador,
      corregido: false
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