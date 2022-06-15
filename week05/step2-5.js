'use strict';

function multiplyAll(arr) {
  // eslint-disable-next-line
  let product = 1;
  const lastIndex=arr.length-1
 for(let i=0; i<=lastIndex; i++){
   let smallerArray=arr[i];
   for(let a=0; a<=smallerArray.length-1; a++){
     let number=smallerArray[a];
			product=product*number;
   }
 }
  console.log(arr, product);

  return product;
}

const result = multiplyAll([[1, 2], [3, 4], [5, 6]]);
console.log(result); // 720

// Do not change or remove anything below this line
module.exports = multiplyAll;
