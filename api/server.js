// const CONNECTION_URI = process.env.MONGODB_URI;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./DB.js');
const postRoute = require('./post.route');
const userRoute = require('./user.route');
const tareaRoute = require('./tarea.route');
const path = require("path")

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
    () => { console.log('Database is connected') },
    err => { console.log('Can not connect to the database' + err) }
);

// app.use(express.static(__dirname + "/dist/"));
app.use(express.static(path.join(__dirname, '../dist')))
app.get(/.*/, function (req, res) {
    res.sendFile(path.join(__dirname, '../dist'));
})
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/posts', postRoute);
app.use('/usuarios', userRoute);
app.use('/tareas', tareaRoute);


// Para desarrollo
app.listen(5000, function () {
    console.log('Server is running on Port:', 5000);
});

// console.log(process.env.PORT);
// Para despliegue
// app.listen(process.env.PORT || 4000);