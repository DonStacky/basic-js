const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
  const res = {};
  let wholedom = domains.join('.').split('.');
  let reversedom = domains.map((item) => item.split('.').reverse().join('.'));
  console.log(reversedom);
  for (let a of reversedom) {
    let index = a.split('.');
    console.log(index);
    for (let i = 0; i < index.length; i++) {
      res[(index[i - 2] ? '.' + index[i - 2] : '')  + (index[i - 1] ? '.' + index[i - 1] : '') + '.'+ index[i]] = wholedom.filter((item) => item === index[i]).length;
    }
  }
  console.log(res);
  return res;
}

module.exports = {
  getDNSStats
};
