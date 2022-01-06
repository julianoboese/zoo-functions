const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const employeeObject = data.employees.find((employee) => employee.firstName === employeeName
  || employee.lastName === employeeName);
  return employeeObject === undefined ? {} : employeeObject;
}

module.exports = getEmployeeByName;
