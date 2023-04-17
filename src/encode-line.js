const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  let arr = str.split('');
  let setArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
    } else {
      setArr.push(arr[i]);
    }}
  let res = [];
  for (let a of setArr) {
    res.push(`${arr.filter((item, index, arr) => item === a && item === arr[index +1]).length + 1 === 1 ? '' : arr.filter((item, index, arr) => item === a && item === arr[index +1]).length + 1}${a}`);
  }
  return res.join('');
  }

module.exports = {
  encodeLine
};
