const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personSchema = new Schema({
    name: String,
    gender: String,
    birthYear: Number,
    eyeColor: String,
    image: String
  });

const planetSchema = new Schema({
    name: String,
    population: Number,
    rotationPeriod: Number,
    diameter: Number,
    image: String
  });

const starshipSchema = new Schema({
    name: String,
    model: String,
    costInCredits: Number,
    length: Number,
    crew: String,
    passengers: Number,
    cargoCapacity: Number,
    image: String
  });

module.exports = {
    Person: mongoose.model('Person', personSchema, 'persons'),
    Planet: mongoose.model('Planet', planetSchema, 'planets'),
    Starship: mongoose.model('Starship', starshipSchema, 'starships')
}