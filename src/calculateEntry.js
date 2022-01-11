const { prices } = require('../data/zoo_data');

function countEntrants(entrants) {
  return entrants.reduce((acc, { age }) => {
    let person = 'adult';
    if (age < 18) {
      person = 'child';
    }
    if (age >= 50) {
      person = 'senior';
    }
    return { ...acc, [person]: acc[person] + 1 || 1 };
  }, {});
}

function calculateEntry(entrants) {
  if (!Array.isArray(entrants)) {
    return 0;
  }
  return Object.entries(countEntrants(entrants)).reduce((acc, [person, amount]) => (
    acc + prices[person] * amount
  ), 0);
}

module.exports = { calculateEntry, countEntrants };
