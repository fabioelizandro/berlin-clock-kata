const minutes = require('./minutes');
const fiveHourRow = require('./five-hour-row');
const oneHourRow = require('./one-hour-row');
const fiveMinuteRow = require('./five-minute-row');
const oneMinuteRow = require('./one-minute-row');

module.exports = date => {
  return {
    minutes: minutes(date),
    fiveHourRow: fiveHourRow(date),
    oneHourRow: oneHourRow(date),
    fiveMinuteRow: fiveMinuteRow(date),
    oneMinuteRow: oneMinuteRow(date)
  };
};
