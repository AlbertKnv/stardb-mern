export default class DummySwapiService {

  _people = [
    {
      __id: 1,
      name: 'Alice [TEST DATA]',
      gender: 'male',
      birthYear: 1930,
      eyeColor: 'dark brown',
      image: 'Alice.png'
    },

    {
      _id: 2,
      name: 'Bob [TEST DATA]',
      gender: 'male',
      birthYear: 1900,
      eyeColor: 'dark brown',
      image: 'Bob.png'
    }
  ];

  _planets = [
    {
      _id: 1,
      name: 'Earth [TEST DATA]',
      population: 7000000000,
      rotationPeriod: 365,
      diameter: 7000,
      image: 'Earth.png'
    },

    {
      _id: 2,
      name: 'Venus [TEST DATA]',
      population: 600,
      rotationPeriod: 1345,
      diameter: 15000,
      image: 'Jupiter.png'
    }
  ];

  _starships = [
    {
      _id: 1,
      name: 'Airbus [TEST DATA]',
      model: 'A320',
      manufacturer: 'Airbus',
      costInCredits: 10000000,
      length: 140,
      crew: "some",
      passengers: 50,
      cargoCapacity: 100,
      image: 'Airbus.png'
    }
  ];

  getAllPeople = async () => {
    return this._people;
  };

  getPerson = async () => {
    return this._people[0];
  };

  getAllPlanets = async () => {
    return this._planets;
  };

  getPlanet = async () => {
    return this._planets[0]
  };

  getAllStarships = async () => {
    return this._starships;
  };

  getStarship = async () => {
    return this._starships[0];
  };

  getPersonImage = () => {
    return `https://placeimg.com/400/500/people`
  };

  getStarshipImage = () => {
    return `https://placeimg.com/600/400/tech`;
  };

  getPlanetImage = () => {
    return `https://placeimg.com/400/400/nature`
  };
}
