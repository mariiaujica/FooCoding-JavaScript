'use strict';

const arr2d = [[1, 2], [3, 4], [5, 6]];
const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

function flattenArray(arr, dimentions) {
  return arr.flat(dimentions);
}

function flattenArray2d(arr) {
  return flattenArray(arr,2);
}

function flattenArray3d(arr) {
  return flattenArray(arr,3);
}

console.log(flattenArray2d(arr2d)); // -> [1, 2, 3, 4, 5, 6]
console.log(flattenArray3d(arr3d)); // -> [1, 2, 3, 4, 5, 6, 7, 8]

// Do not change or remove anything below this line
  module.exports = {
  flattenArray2d,
  flattenArray3d,
};
