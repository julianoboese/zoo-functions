const data = require('../data/zoo_data');

function getNames(species, sex, sorted) {
  const names = sex ? species.residents.filter((resident) => resident.sex === sex)
    .map((resident) => resident.name)
    : species.residents.map((resident) => resident.name);

  if (sorted) {
    names.sort();
  }

  return names;
}

function getAnimalMap({ includeNames, sex, sorted } = {}) {
  return data.species.reduce((acc, species) => (
    { ...acc,
      [species.location]: !includeNames ? [...acc[species.location] || '', species.name]
        : [...acc[species.location] || '', { [species.name]: getNames(species, sex, sorted) }] }
  ), {});
}

module.exports = getAnimalMap;
