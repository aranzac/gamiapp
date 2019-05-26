// const CONNECTION_URI = process.env.MONGODB_URI;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./DB.js');
const postRoute = require('./post.route');
const path = require("path")

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
    () => { console.log('Database is connected') },
    err => { console.log('Can not connect to the database' + err) }
);

// app.use(express.static(__dirname + "/dist/"));
app.use(express.static(path.join(__dirname, '../dist')))
app.get(/.*/, function (req, res) {
    res.sendfile(path.join(__dirname, '../dist'));

})
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/posts', postRoute);

app.listen(PORT, function () {
    console.log('Server is running on Port:', PORT);
});

// app.listen(process.env.PORT || 4000);