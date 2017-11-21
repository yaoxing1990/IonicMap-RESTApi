const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(bodyParser.json());

Place = require('./models/place');

// Connect to Mongoose
mongoose.connect('mongodb://localhost/map');
var db = mongoose.connection;

app.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.get('/', function(req, res){
    Place.getPlaces(function (err, place) {
        if(err) {
            throw err;
        }
        res.json(place);
    });
});

app.listen(3000);
console.log('Running on port 3000...');
