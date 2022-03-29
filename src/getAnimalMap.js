const { species } = require('../data/zoo_data');

function getNames(residents, sex, sorted) {
  const names = sex ? residents.filter((resident) => resident.sex === sex)
    .map((resident) => resident.name)
    : residents.map((resident) => resident.name);

  if (sorted) {
    names.sort();
  }

  return names;
}

function getAnimalMap({ includeNames, sex, sorted } = {}) {
  return species.reduce((acc, { name, location, residents }) => (
    {
      ...acc,
      [location]: !includeNames ? [...acc[location] || '', name]
        : [...acc[location] || '', { [name]: getNames(residents, sex, sorted) }],
    }
  ), {});
}

module.exports = getAnimalMap;
