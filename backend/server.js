const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const starRoutes = express.Router();
const PORT = 4000;

let { Person, Planet, Starship } = require('./models');

app.use(cors());

app.use(express.static('public'));

mongoose.connect('mongodb://127.0.0.1:27017/stardb', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
});

starRoutes.route('/people').get(function(req, res) {
    Person.find(function(err, people) {
        if (err) {
            console.log(err);
        } else {
            res.json(people);
        }
    });
});

starRoutes.route('/people/:id').get(function(req, res) {
    let id = req.params.id;
    Person.findById(id, function(err, person) {
        res.json(person);
    });
});

starRoutes.route('/planets').get(function(req, res) {
    Planet.find(function(err, planets) {
        if (err) {
            console.log(err);
        } else {
            res.json(planets);
        }
    });
});

starRoutes.route('/planets/:id').get(function(req, res) {
    let id = req.params.id;
    if (id === 'random') {
        Planet.findOne(null, function(err, planet) {
            res.json(planet);
        });
    } else {
        Planet.findById(id, function(err, planet) {
            res.json(planet);
        });
    }
});

starRoutes.route('/starships').get(function(req, res) {
    Starship.find(function(err, starships) {
        if (err) {
            console.log(err);
        } else {
            res.json(starships);
        }
    });
});

starRoutes.route('/starships/:id').get(function(req, res) {
    let id = req.params.id;
    Starship.findById(id, function(err, starship) {
        res.json(starship);
    });
});

app.use('/api', starRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});