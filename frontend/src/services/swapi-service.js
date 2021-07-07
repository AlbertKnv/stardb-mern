export default class SwapiService {

  // _apiBase = 'https://swapi.co/api';
  _apiBase = 'http://localhost:4000/api';
  // _imageBase = 'https://starwars-visualguide.com/assets/img';
  _imageBase = 'http://localhost:4000/images';

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`)
    }
    return await res.json();
  };

  getAllPeople = async () => {
    const res = await this.getResource(`/people/`);
    console.log(res)
    return res.map(this._transformPerson)
      .slice(0, 5);
  };

  getPerson = async (id) => {
    const person = await this.getResource(`/people/${id}/`);
    return this._transformPerson(person);
  };

  getAllPlanets = async () => {
    const res = await this.getResource(`/planets/`);
    return res.map(this._transformPlanet)
      .slice(0, 5);
  };

  getPlanet = async (id) => {
    const planet = await this.getResource(`/planets/${id}/`);
    return this._transformPlanet(planet);
  };

  getAllStarships = async () => {
    const res = await this.getResource(`/starships/`);
    return res.map(this._transformStarship)
      .slice(0, 5);
  };

  getStarship = async (id) => {
    const starship = await this.getResource(`/starships/${id}/`);
    return this._transformStarship(starship);
  };

  getPersonImage = ({image}) => {
    return `${this._imageBase}/people/${image}`
  };

  getStarshipImage = ({image}) => {
    return `${this._imageBase}/starships/${image}`
  };

  getPlanetImage = ({image}) => {
    return `${this._imageBase}/planets/${image}`
  };

  _extractId = (item) => {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  };

  _transformPlanet = (planet) => {
    return {
      id: planet._id,
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotationPeriod,
      diameter: planet.diameter,
      image: planet.image
    };
  };

  _transformStarship = (starship) => {
    return {
      id: starship._id,
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.cost_in_credits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargo_capacity,
      image: starship.image
    }
  };

  _transformPerson = (person) => {
    return {
      id: person._id,
      name: person.name,
      gender: person.gender,
      birthYear: person.birthYear,
      eyeColor: person.eyeColor,
      image: person.image
    }
  }
}
