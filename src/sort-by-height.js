const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
 function sortByHeight(arr) {
  let index = [];
  for (let i = 0; i < arr.length; i++){
    if(arr[i] !== -1) index.push(i);
  }
  let sortArr = arr.filter((item) => item !== -1).sort(function (a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  });
  count = 0;
  for (let ind of index){
    arr[ind] = sortArr[count];
    count++;
  }
  return arr;
  }

module.exports = {
  sortByHeight
};
