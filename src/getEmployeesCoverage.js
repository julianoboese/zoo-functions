const { species, employees } = require('../data/zoo_data');

function getEmployeesCoverage({ id, name } = {}) {
  const people = employees.map(({
    id: empId, firstName, lastName, responsibleFor,
  }) => {
    const animals = species.filter(({ id: specId }) => responsibleFor.includes(specId));
    return {
      id: empId,
      fullName: `${firstName} ${lastName}`,
      species: animals.map(({ name: specName }) => specName),
      locations: animals.map(({ location }) => location),
    };
  });

  if (!id && !name) return people;

  const person = people.find(({ id: pId, fullName }) => pId === id || fullName.includes(name));

  try {
    if (person) return person;
    throw new Error('Informações inválidas');
  } catch (error) {
    throw error.message;
  }
}

module.exports = getEmployeesCoverage;
