const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
require('./config/config');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

mongoose.connect(process.env.URLDB,
{useNewUrlParser: true, useCreateIndex: true},
 (err, res) => {
    if (err) throw err;
    console.log('Base de datos online');
});


app.use(require('./routes/usuario'));


app.listen(process.env.PORT, () => {
    console.log('Escuchando el puerto', process.env.PORT);
});