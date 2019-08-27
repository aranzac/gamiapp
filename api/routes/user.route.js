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
        puntuacion: 0,
        tareas_resueltas: 0,
        racha: 0,
        logros: [11],
        ultima_conexion: null,
        juegos_jugados: [],
        puntuacion_anterior: 0,
        puntuaciones_maximas: 0

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
                        puntuacion: user.puntuacion,
                    }

                    let token = jwt.sign(payload, process.env.SECRET_KEY, {
                        expiresIn: 1800
                    })

                    // Guardar el momento de la conexión actual como última conexión 
                    if (user.rol == "alumno") {
                        var aux = user.ultima_conexion;
                        user.ultima_conexion = new Date();

                        // // Actualizar la racha
                        // if (aux != null) {
                        //     var one_day = 1000 * 60 * 60 * 24;
                        //     var d1 = aux.getTime();
                        //     var d2 = user.ultima_conexion.getTime();
                        //     user.racha = Math.round(Math.abs(d2 - d1) / one_day);
                        user.save();
                        // }
                    }

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
});

userRoutes.route('/getracha/:id').get(function (req, res) {
    User.findById({
        _id: req.params.id
    }, function (err, user) {
        if (err) {
            res.json(err);
        } else {
            res.json({
                racha: user.racha
            })
        }
    })
})

userRoutes.route('/updateracha/:id').get(function (req, res) {
    User.findById({
        _id: req.params.id
    }, function (err, user) {
        if (err) {
            res.json(err);
        } else {
            var aux = user.ultima_conexion;
            var copia = user.racha;
            var hoy = new Date();
            user.ultima_conexion = hoy;
            // console.log(aux)
            // console.log(hoy)

            // Actualizar la racha. Pregunta si es nulo para que no lo compare en caso de que sea la primera vez que se conecta (No hay dos fechas que comparar)
            if (aux != null) {

                var dia = 1000 * 60 * 60 * 24;

                // Dia de ult conexion
                var d1 = aux.getTime();
                // console.log(d1);

                // Dia de hoy
                var d2 = user.ultima_conexion.getTime();
                // console.log(d2);

                var diff = (d2 - d1) / dia;
                // var diff = Math.round(Math.abs(d2 - d1) / dia);

                // console.log(diff)
                // Si ha pasado más de un día sin conectarse
                if (diff >= 1) {
                    user.racha = 0
                    // console.log("la racha se resetea")
                } else {

                    // Si se ha conectado en menos de 1 dia pero los dias son distintos, por lo tanto, aumenta la racha en un día
                    if (user.ultima_conexion.getDate() != aux.getDate()) {
                        user.racha++;
                        // console.log("La racha aumenta")

                    } else {
                        // user.racha--;
                        // console.log("la racha sigue igual")
                    }
                    user.save().then(response => {
                        res.json({
                            racha: copia
                        });
                    })
                }

            } else {
                user.save();
                res.json({
                    status: 'Primer acceso tras el registro'
                })
            }
        }
    });
});

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

userRoutes.route('/max/:id').get(function (req, res) {
    User.find({
        rol: "alumno"
    }, function (err, usuarios) {
        if (err) {
            res.json(err);
        } else {
            var array2 = [];

            // Obtener el par id - puntuacion
            usuarios = usuarios.map(function (doc) {
                var array = [];
                array.push(doc._id, doc.puntuacion);
                array2.push(array)
            });

            // Método que organiza el array doble en función de la puntuacion
            usuarios = array2.sort(function (a, b) {
                return a[1] - b[1];
            });
            User.findById({
                _id: req.params.id
            }, function (err, user) {
                if (err) {
                    res.json(err);
                } else {
                    // res.send(user);
                    var a = usuarios[usuarios.length - 1][0].toString()
                    var b = user._id.toString()

                    if (usuarios[usuarios.length - 1][0].toString() == user._id.toString()) {
                        // user.logros = user.logros.push(12)
                        var aux = [12];
                        user.logros = user.logros.concat(aux)
                        user.save();
                    }

                }
            });


            // Enviamos el id_ de la ultima posición que será el de mayor puntuacion
            // console.log(usuarios)
            // if (usuarios[usuarios.length - 1][0]._id)
            // console.log(usuarios[usuarios.length - 1][0]);
            // res.send(usuarios[usuarios.length - 1][0]);
            // return usuarios[usuarios.length - 1][0];
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
            res.send(usuarios);
        }
    });
});

const niveles = [50, 100, 150, 200, 250, 300, 350, 400, 450, 500];
const limites = [50, 150, 300, 500, 750, 1050, 1400, 1800, 2250, 2750]

userRoutes.route('/calificar').post(function (req, res) {
    User.findById({
        _id: req.body._id
    }, function (err, user) {
        if (err) {
            res.json(err);
        } else {
            var suma;
            // Se calcula lo que se va a sumar
            if (user.racha >= 2) {

                // Con racha se aplica una bonificación que corresponde al porcentaje formado por racha * 0.1
                suma = Math.round(req.body.puntuacion * 5 + req.body.puntuacion * 5 * user.racha * 0.1);
            } else {
                suma = req.body.puntuacion * 5;
            }

            //  Suma final sobre los puntos actuales del usuario
            user.puntuacion = (suma + user.puntuacion);
            if (user.puntuacion >= limites[user.nivel - 1] && user.nivel < 10)
                user.nivel++;

            user.save().then(() => {
                    res.json('Update complete');
                })
                .catch(() => {
                    res.status(400).send("unable to update the database");
                });
        }
    });
});

userRoutes.route('/earn').post(function (req, res) {
    console.log("earn")
    User.findById({
        _id: req.body._id
    }, function (err, user) {
        if (err) {
            res.json(err);
        } else {
            var suma;
            // Se calcula lo que se va a sumar
            if (user.racha >= 2) {

                // Con racha se aplica una bonificación que corresponde al porcentaje formado por racha * 0.1
                suma = Math.round(req.body.puntuacion * user.racha * 0.1);
            } else {
                suma = req.body.puntuacion;
            }

            // Se añade el juego si se ha obtenido la puntuación máxima
            user.puntuacion = (suma + user.puntuacion);
            if (req.body.maximo) {
                // Para que no se añadan dos puntuaciones perfectas por el mismo juego se comprueba si ya lo ha jugado antes
                if (!user.juegos_jugados.includes(req.body.id_juego)) {
                    user.puntuaciones_maximas++;
                    user.juegos_jugados.push(req.body.id_juego);
                }
            }

            if (user.puntuacion >= limites[user.nivel - 1] && user.nivel < 10)
                user.nivel++;

            user.save().then(() => {
                    res.json({
                        puntos: suma
                    })
                })
                .catch(() => {
                    res.status(400).send("unable to update the database");
                });
        }
    });
})

userRoutes.route('/resetearpuntos').post(function (req, res) {
    User.findById({
        _id: req.body._id
    }, function (err, user) {
        if (err) {
            res.json(err);
        } else {
            user.puntuacion_anterior = user.puntuacion;
            user.save().then(() => {
                    res.json('Update complete');
                })
                .catch(() => {
                    res.status(400).send("unable to update the database");
                });
        }
    });
});

userRoutes.route('/addlogro').post(function (req, res) {
    User.findById({
        _id: req.body.id
    }, function (err, user) {
        if (err) {
            res.json(err);
        } else {
            user.logros = user.logros.concat(req.body.logros)
            user.save().then(() => {
                    res.send(user.logros);
                })
                .catch(() => {
                    res.status(400).send("unable to update the database");
                });
        }
    });
});

userRoutes.route('/levelup').post(function (req, res) {
    User.findById({
        _id: req.body._id
    }, function (err, user) {
        if (err) {
            res.json(err);
        } else {
            if (user.nivel < 10)
                user.nivel = user.nivel + 1;
            user.save().then(() => {
                    res.json('Update complete');
                })
                .catch(() => {
                    res.status(400).send("unable to update the database");
                });
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

userRoutes.route('/existente').post(function (req, res) {
    let email = req.body.email;
    User.findOne({
        email: email
    }, function (err, user) {
        if (user) {
            res.json(user.email);
        } else if (!user) {
            res.json({
                error: 'Not used'
            })
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