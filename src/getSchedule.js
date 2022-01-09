const { species, hours } = require('../data/zoo_data');

function getSchedule(scheduleTarget) {
  if (species.some(({ name }) => name === scheduleTarget)) {
    return species.find(({ name }) => name === scheduleTarget).availability;
  }

  const schedule = Object.entries(hours).reduce((acc, [weekday, { open, close }]) =>
    ({ ...acc,
      [weekday]: {
        officeHour: `Open from ${open}am until ${close}pm`,
        exhibition: species.reduce((acc2, { name, availability }) =>
          (availability.includes(weekday) ? [...acc2, name] : acc2), []),
      },
    }),
  {});
  schedule.Monday = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };

  return schedule[scheduleTarget] ? { [scheduleTarget]: schedule[scheduleTarget] } : schedule;
}

module.exports = getSchedule;
