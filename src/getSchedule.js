const data = require('../data/zoo_data');

function createCompleteSchedule() {
  const schedule = {};

  Object.keys(data.hours).forEach((weekday) => {
    const animals = [];
    data.species.forEach((species) => {
      if (species.availability.includes(weekday)) {
        animals.push(species.name);
      }
    });
    schedule[weekday] = {
      officeHour: `Open from ${data.hours[weekday].open}am until ${data.hours[weekday].close}pm`,
      exhibition: animals,
    };
  });
  schedule.Monday = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };

  return schedule;
}

function getSchedule(scheduleTarget) {
  if (data.species.some((species) => species.name === scheduleTarget)) {
    return data.species.find((species) => species.name === scheduleTarget).availability;
  }

  const schedule = createCompleteSchedule();

  if (schedule[scheduleTarget]) {
    return { [scheduleTarget]: schedule[scheduleTarget] };
  }

  return schedule;
}

module.exports = getSchedule;
