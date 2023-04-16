const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  let strF = str;
  let optionsF = {
      repeatTimesF: options.repeatTimes ? options.repeatTimes : 1,
      separatorF: options.separator ? options.separator : '+',
      additionF: options.addition === false ? 'false' : options.addition === null ? 'null' : options.addition ? options.addition : "",
      additionRepeatTimesF: options.additionRepeatTimes ? options.additionRepeatTimes : 1,
      additionSeparatorF: options.additionSeparator ? options.additionSeparator : '|',
  }
  let addSep = new Array(optionsF.additionRepeatTimesF).fill(optionsF.additionF).join(optionsF.additionSeparatorF);
  let addStrSep = strF + addSep;
  let strRes = new Array(optionsF.repeatTimesF).fill(addStrSep);
  console.log(addSep);
  console.log(strRes);
  console.log(strRes.join(optionsF.separatorF));
  return strRes.join(optionsF.separatorF);
}

module.exports = {
  repeater
};
