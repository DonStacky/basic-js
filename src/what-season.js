const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */

 function getSeason(date) {
  console.log(date)
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  } else if (!(typeof date === 'object') || !Date.parse(date) || !(date instanceof Date)) {
  console.log('Invalid date!')
    return 'Invalid date!';
  } else {
  let month = date.getMonth() + 1;
  if (month >= 3 && month <= 5) {
    return 'spring';
  } else if (month >= 6 && month <= 8) {
    return 'summer';
  } else if (month >= 9 && month <= 11) {
    return 'fall';
  } else {
    return 'winter';
  }}
}

module.exports = {
  getSeason
};
