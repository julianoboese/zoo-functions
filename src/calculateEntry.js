const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const totalEntrants = { child: 0, adult: 0, senior: 0 };
  if (Object.keys(entrants).length === 0) {
    return totalEntrants;
  }
  entrants.forEach((entrant) => {
    if (entrant.age < 18) {
      totalEntrants.child += 1;
    } else if (entrant.age < 50) {
      totalEntrants.adult += 1;
    } else {
      totalEntrants.senior += 1;
    }
  });
  return totalEntrants;
}

function calculateEntry(entrants = []) {
  const { child, adult, senior } = countEntrants(entrants);
  return child * data.prices.child + adult * data.prices.adult + senior * data.prices.senior;
}

module.exports = { calculateEntry, countEntrants };
