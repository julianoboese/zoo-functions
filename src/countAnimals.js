const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    return data.species.reduce((acc, species) => {
      acc[species.name] = species.residents.length;
      return acc;
    }, {});
  }

  const animalToCount = data.species.find((species) => species.name === animal.specie);
  if (!animal.sex) {
    return animalToCount.residents.length;
  }
  return animalToCount.residents.filter((species) => species.sex === animal.sex).length;
}

module.exports = countAnimals;
