const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return data.species.find((species) => species.name === animal)
    .residents.every((resident) => resident.age >= age);
}

module.exports = getAnimalsOlderThan;
