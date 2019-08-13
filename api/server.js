// const CONNECTION_URI = process.env.MONGODB_URI;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./DB.js');
const postRoute = require('./routes/post.route');
const userRoute = require('./routes/user.route');
const tareaRoute = require('./routes/tarea.route');
const solucionesRoute = require('./routes/soluciones.route');
const logrosRoute = require('./routes/logros.route');
const juegosRoute = require('./routes/juegos.route');

/////////// SSL //////////
const sslRedirect = require('heroku-ssl-redirect');
const secure = require('express-force-https');



const path = require("path")

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, {
    useNewUrlParser: true
}).then(
    () => {
        console.log('Database connected')
    },
    err => {
        console.log('Can not connect to the database' + err)
    }
);

// app.use(express.static(__dirname + "/dist/"));
app.use(express.static(path.join(__dirname, '../dist')))
app.get(/.*/, function (req, res) {
    res.sendFile(path.join(__dirname, '../dist'));
})

app.use('/uploads', express.static('uploads'));


app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use('/posts', postRoute);
app.use('/usuarios', userRoute);
app.use('/tareas', tareaRoute);
app.use('/soluciones', solucionesRoute);
app.use('/logros', logrosRoute);
app.use('/juegos', juegosRoute);


///////// SSL MIDDLEWARE /////////
app.use(sslRedirect);

app.use(secure)


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    if (req.method === 'OPTIONS') {
        res.headers('Access-Control-Allow-Methods', 'POST, PUT, GET, DELETE');
        return res.status(200).json({})
    }
    next();
});

// // Para desarrollo
// app.listen(5000, function () {
//     console.log('Server is running on Port:', 5000);
// });

// Para despliegue
app.listen(process.env.PORT || 4000);


// console.log(process.env.PORT);