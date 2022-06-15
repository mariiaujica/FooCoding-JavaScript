'use strict';

const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];

function makeUnique(arr) {
  let uniqueArray = [];
  for(let i=0; i<=arr.length-1; i++){
    const value = arr[i];
    if(!uniqueArray.includes(value)){
      uniqueArray.push(value);
    }
  }
  return uniqueArray;
}

const uniqueValues = makeUnique(values);
console.log(uniqueValues);

// Do not change or remove anything below this line
module.exports = makeUnique;
