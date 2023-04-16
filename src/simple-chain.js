const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
 const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    console.log(this.chain);
    return this;
  },
  removeLink(position) {
      if (position < 1 || position > this.chain.length || typeof position !== 'number' || !Number.isInteger(position)) {
        this.chain = [];
          console.log("You can\'t remove incorrect link!");
          throw new Error("You can\'t remove incorrect link!");
      } else {
    this.chain.splice(position - 1, 1);
    console.log(this.chain);
    return this;
      }
  },
  reverseChain() {
      this.chain.reverse();
      console.log(this.chain);
      return this;
  },
  finishChain() {
      console.log(this.chain.join('~~'));
      let res = this.chain.join('~~');
      this.chain = [];
      return res;
  }
};

module.exports = {
  chainMaker
};
