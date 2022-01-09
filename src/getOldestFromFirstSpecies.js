const { species, employees } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const firstSpecies = employees.find((employee) => employee.id === id).responsibleFor[0];
  return Object.values(species.find((spec) => spec.id === firstSpecies)
    .residents.sort((a, b) => b.age - a.age)[0]);
}

module.exports = getOldestFromFirstSpecies;
