const data = require('../data/zoo_data');

function createCompleteCoverage() {
  return data.employees.map((employee) => {
    const animals = data.species.filter((species) => employee.responsibleFor.includes(species.id));
    return {
      id: employee.id,
      fullName: `${employee.firstName} ${employee.lastName}`,
      species: animals.map((species) => species.name),
      locations: animals.map((species) => species.location),
    };
  });
}

function getPerson(id, name) {
  if (id) {
    return createCompleteCoverage().find((employee) => employee.id === id);
  }
  if (name) {
    return createCompleteCoverage().find((employee) => employee.fullName.split(' ').includes(name));
  }
}

function getEmployeesCoverage({ id, name } = {}) {
  if (!id && !name) {
    return createCompleteCoverage();
  }

  const person = getPerson(id, name);

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
