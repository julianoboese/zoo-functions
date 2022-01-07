const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const firstSpecies = data.employees.find((employee) => employee.id === id).responsibleFor[0];
  return Object.values(data.species.find((species) => species.id === firstSpecies)
    .residents.sort((a, b) => b.age - a.age)[0]);
}

module.exports = getOldestFromFirstSpecies;
