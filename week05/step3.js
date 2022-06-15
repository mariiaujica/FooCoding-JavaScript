'use strict';

function createBase(base) {
  function callback(numToAdd) {
    return numToAdd + base;
  };
  return callback;
}

const addSix = createBase(6);

console.log(addSix(10)); // returns 16
console.log(addSix(21)); // returns 27

// Do not change or remove anything below this line
module.exports = createBase;
