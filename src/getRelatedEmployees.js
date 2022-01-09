const { employees } = require('../data/zoo_data');

function isManager(id) {
  return employees.some(({ managers }) => managers.includes(id));
}

function getRelatedEmployees(managerId) {
  try {
    if (isManager(managerId)) {
      return employees.filter(({ managers }) => managers.includes(managerId))
        .map(({ firstName, lastName }) => `${firstName} ${lastName}`);
    }
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  } catch (error) {
    throw error.message;
  }
}

module.exports = { isManager, getRelatedEmployees };
