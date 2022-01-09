const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    return species.reduce((acc, spec) => (
      { ...acc, [spec.name]: spec.residents.length }
    ), {});
  }

  const animalToCount = species.find((spec) => spec.name === animal.specie);
  if (!animal.sex) {
    return animalToCount.residents.length;
  }
  return animalToCount.residents.filter((spec) => spec.sex === animal.sex).length;
}

module.exports = countAnimals;
