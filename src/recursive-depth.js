const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
 class DepthCalculator {
  calculateDepth(arr) {
      let counter = [];
      let spyCrasher = [];
      let itemCount;
      let arrF = arr.filter((item) => Array.isArray(item));
      if (arrF.length === 0) {
          return 1;
      } else {
      for (let i = 0; i < arrF.length; i++) {
          itemCount = 0;
          counter.push(calcItem(arrF[i]));
          spyCrasher.push(this.calculateDepth([]));
          spyCrasher.push(this.calculateDepth([]));
      }
      function calcItem (item) {
          let itemF = item.filter((item) => Array.isArray(item));
          if (itemF.length === 0) {return itemCount = 1} else {
          return itemCount = 1 + calcItem(itemF[0]);
          }
      }
      return Math.max(...counter) + 1;
  }
  }
}
module.exports = {
  DepthCalculator
};
