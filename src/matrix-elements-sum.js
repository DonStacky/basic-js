const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
 function getMatrixElementsSum(matrix) {
  let nonindex = [];
  let res = 0;
  for (let i = 0; i < matrix.length; i++) {
    matrix[i].forEach((item, index) => {if (item === 0) nonindex.push(index);})
    for (let j = 0; j < matrix[0].length; j++) {
      nonindex.includes(j) ? res += 0 : res += matrix[i][j];
    }
  }
  return res;
}

module.exports = {
  getMatrixElementsSum
};
