'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers =  createArray(startIndex, stopIndex);
  const lastIndex = numbers.length-1;
	for(let i=0; i<=lastIndex; i++){
    let value = numbers[i];
    console.log(value);
    if (value%3 ===0 ){
      sayThree(value);
    }
    if(value%5 ===0){
      sayFive(value);
    }    
  };
}

function createArray(minNum, maxNum){
  let arr=[];
  for(let i=minNum; i<=maxNum; i++){
		arr.push(i);
  }
  return arr;
}

function sayThree(number) {
 console.log(number + " Is Divisible By Three");
}

function sayFive(number) {
  console.log(number+ " Is Divisible By Five");
}

threeFive(10, 15, sayThree, sayFive);

// Do not change or remove anything below this line
module.exports = threeFive;
















