const data = require('../data/zoo_data');

function getNames(species, sex, sorted) {
  let names;

  if (sex) {
    names = species.residents.filter((resident) => resident.sex === sex)
      .map((resident) => resident.name);
  } else {
    names = species.residents.map((resident) => resident.name);
  }

  if (sorted) {
    names.sort();
  }

  return names;
}

function getAnimalMap({ includeNames, sex, sorted } = {}) {
  const animalMap = data.species.reduce((acc, species) => {
    acc[species.location] = [];
    return acc;
  }, {});

  if (!includeNames) {
    data.species.forEach((species) => animalMap[species.location].push(species.name));
    return animalMap;
  }

  data.species.forEach((species) => {
    animalMap[species.location].push({ [species.name]: getNames(species, sex, sorted) });
  });

  return animalMap;
}

module.exports = getAnimalMap;
