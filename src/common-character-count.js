const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 function getCommonCharacterCount(s1, s2) {
  let arr1 = s1.split('');
  let arr2 = s2.split('');
  let set = new Set(arr1);
  let count = 0;
for (let a of set) {
  if (arr2.includes(a)) {
    count += arr1.filter((item) => item === a).length > arr2.filter((item) => item === a).length ?
    arr2.filter((item) => item === a).length : arr1.filter((item) => item === a).length;
  }
}
console.log(count);
return count;
}
module.exports = {
  getCommonCharacterCount
};
