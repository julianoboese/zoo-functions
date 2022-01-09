const { species, hours } = require('../data/zoo_data');

function createCompleteSchedule() {
  const schedule = {};

  Object.keys(hours).forEach((weekday) => {
    const animals = [];
    species.forEach((spec) => {
      if (spec.availability.includes(weekday)) {
        animals.push(spec.name);
      }
    });
    schedule[weekday] = {
      officeHour: `Open from ${hours[weekday].open}am until ${hours[weekday].close}pm`,
      exhibition: animals,
    };
  });
  schedule.Monday = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };

  return schedule;
}

function getSchedule(scheduleTarget) {
  if (species.some((spec) => spec.name === scheduleTarget)) {
    return species.find((spec) => spec.name === scheduleTarget).availability;
  }

  const schedule = createCompleteSchedule();

  if (schedule[scheduleTarget]) {
    return { [scheduleTarget]: schedule[scheduleTarget] };
  }

  return schedule;
}

module.exports = getSchedule;
