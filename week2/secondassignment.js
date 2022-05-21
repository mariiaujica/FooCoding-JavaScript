/*1. Strings!*/
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
console.log(myString.length);
let stringWithSpace=myString.replace(/,/g," ");
console.log(stringWithSpace);
/*2.Arrays!*/
let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
favoriteAnimals.push("turtle");
console.log(favoriteAnimals);
favoriteAnimals.splice(1,0,'meerkat');
console.log(favoriteAnimals);
console.log('The array has a length:', favoriteAnimals.length );
let deletedAnimal=favoriteAnimals.splice(3,1);
console.log(favoriteAnimals);
console.log('The number u are looking for is:',favoriteAnimals.indexOf('meerkat'));
/*3.JavaScript*/
/*3.1*/
function tripleSum(arg1,arg2,arg3){
    return arg1+arg2+arg3
  }
  console.log(tripleSum(1,2,3));
  /*3.2*/
  function colorCar(color){
    return 'a '+color+' car'
  }
  console.log(colorCar('green'))
  /*3.3*/
   let human={
    gender:'female',
    eyeColor:'green',
    favoriteFood:'pommes',
  }
   function printParameter(object){
     for (let property in object){
       console.log(property+":"+object[property]);
     }
   }
  printParameter(human);
  /*3.4*/
  let type=2
  function vehicleType(vehicleColor,type){
    if (type==1){
      return 'a '+vehicleColor+' car'
    }
    else {
      return 'a '+vehicleColor+' motorcycle'
    }
  }
  console.log(vehicleType('pink',type))
  /*3.5*/
  console.log(3===3? "yes":"no");
  /*3.6*/
  function vehicle(theColor,theType,age){
    if (type==1 && age>0 ){
      return 'a '+theColor+' used'+' car'
    }
    else if(type==1 && age==0) {
      return 'a '+theColor+' new'+' car'
    }
     else if(type==2 && age>0) {
      return 'a '+theColor+' used'+' motorcycle'
    }
     else if(type==1 && age==0) {
      return 'a '+theColor+' new'+' motorcycle'
    }
  }
  console.log(vehicle('green',1,1))
  /*3.7*/
  let vehicles=["motorbike", "caravan", "bike"];
  /*3.8*/
  console.log(vehicles[2]);
  /*3.9*/
  function vehicle(color, age, vehicleType) {
    if (age <= 2) {
      return console.log("a " + color + " used " + vehiclesList[vehicleType])
    }
    if (age >= 3 && age <= 5) {
      return console.log("a " + color + " new " + vehiclesList[vehicleType])
    }
  }
  vehicle("blue", 2, 1) //  prints 'a blue used caravan'
  
 /*3.10*/
  
  function adFunction() {
    let addLogo = "Amazing Joe's Garage, we service ";
  
    for (let i = 0; i < vehiclesList.length; i++) {
      addLogo += vehiclesList[i] + "s"
      
      if (i === vehiclesList.length -1) {
        addLogo += "."
      }
      else if (i === vehiclesList.length -2) {
        addLogo += " and"
      }
      else{
        addLogo += ", "
      }
    }
    return addLogo
  }
  adFunction()
  
  /*3. 11*/
  vehiclesList.push("anotherVehicle")
  adFunction()
  
  /*3.12*/
  let emptyObj = {};
  
  /*3.13*/
  let teachersObj = {
    Claudiu: "",
    Seif: "",
    Sahin: ""
  };
  
  //*3.14*/
  teachersObj.Claudiu = "HTML class";
  teachersObj.Claudiu = "CSS class";
  teachersObj.Claudiu = "JS class";
  
  /*3.15*/
  let x = [1, 2, 3];
  let y = [1, 2, 3];
  let z = y;
  
  let same = (x.length == y.length) && x.every(function(item, index) {
    return item === y[index];
  });
  console.log(same); 
  x == y; // returns false since each of the value has a different place in memory
  x === y; // returns false 
  z == y; // returns true 
  z == x; // returns false 
  
