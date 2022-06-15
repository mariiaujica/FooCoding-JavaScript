'use strict';

const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}

f1(x);

console.log(x);

const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);

console.log(y);

// Add your explanation as a comment here
// The first function is passing the value by copy and the second function is passing the value by reference.
// So the first function is modifying a copy of the original variable, while the second one is actually changing
// the original variable.
// Because in javascript objects are passed by reference.