const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 let arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
 let notSymbol = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '!', '@', '#', '$', '(', ')', ',', '.', '/', '|', '*', ' ', '&', '^', '%', ':', '-'];

 class VigenereCipheringMachine {
  constructor (value = true) {
      this.direction = value;
  }
  encrypt(message, key) {
    if (typeof message !== 'string' || typeof key !== 'string') {
      throw new Error('Incorrect arguments!');
    }
    let mesStr = message.split('');
    let keyStr = key.split('').filter((item) => !notSymbol.includes(item));
    let arrDec = [];

    for (let i = 0, j = 0; arrDec.length < mesStr.length; i++) {
      if (!notSymbol.includes(mesStr[i])) {
      if (j === keyStr.length) j = 0;
      arrDec.push(keyStr[j]);
      j++;
    } else {
      arrDec.push(mesStr[i]);
    }}

    let decodMes = mesStr.map((item, index) => {
      if(!notSymbol.includes(item)) {
      return arr_en[(arr_en.indexOf(mesStr[index]) + arr_en.indexOf(arrDec[index])) % 26]
    } else {
      return item;
    }
  });

  if (this.direction === true) {
  return decodMes.join('').toUpperCase();
  } else {
    console.log(this.direction);
  return decodMes.reverse().join('').toUpperCase();
  }
}
  decrypt(message, key) {
    if (typeof message !== 'string' || typeof key !== 'string') {
      throw new Error('Incorrect arguments!');
    }
    let mesStr = message.split('');
    let keyStr = key.split('').filter((item) => !notSymbol.includes(item));
    let arrDec = [];

    for (let i = 0, j = 0; arrDec.length < mesStr.length; i++) {
      if (!notSymbol.includes(mesStr[i])) {
      if (j === keyStr.length) j = 0;
      arrDec.push(keyStr[j]);
      j++;
    } else {
      arrDec.push(mesStr[i]);
    }}
    let decodMes = mesStr.map((item, index) => {
      if(!notSymbol.includes(item)) {
      let odds =  (52 + arr_en.indexOf(mesStr[index]) - arr_en.indexOf(arrDec[index]));
      return arr_en[odds % 26]
    } else {
      return item;
    }
  });

  if (this.direction === true) {
    return decodMes.join('').toUpperCase();
    } else {
    return decodMes.reverse().join('').toUpperCase();
    }
}
}
module.exports = {
  VigenereCipheringMachine
};
