const { species, employees } = require('../data/zoo_data');

function createCompleteCoverage() {
  return employees.map(({ id: empId, firstName, lastName, responsibleFor }) => {
    const animals = species.filter(({ id: specId }) => responsibleFor.includes(specId));
    return {
      id: empId,
      fullName: `${firstName} ${lastName}`,
      species: animals.map(({ name }) => name),
      locations: animals.map(({ location }) => location),
    };
  });
}

function getEmployeesCoverage({ id, name } = {}) {
  if (!id && !name) {
    return createCompleteCoverage();
  }

  const person = createCompleteCoverage().find(({ id: pId, fullName }) => pId === id
  || fullName.includes(name));

  try {
    if (person) {
      return person;
    }
    throw new Error('Informações inválidas');
  } catch (error) {
    throw error.message;
  }
}

module.exports = getEmployeesCoverage;
