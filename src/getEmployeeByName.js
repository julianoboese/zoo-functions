const { employees } = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const employeeObject = employees.find(({ firstName, lastName }) => firstName === employeeName
  || lastName === employeeName);
  return employeeObject || {};
}

module.exports = getEmployeeByName;
