/*1*/
console.log('Привет, мир');
console.log('Привіт Світ');
console.log('Hello, world');
console.log('Сәлам, Дөнья');
/*2*/
console.log("I'm awesome");
/*3*/
let x;
console.log("the value of my variable x will be: undefined");
console.log(x);
x = 7;
console.log("the value of my variable x will be: 7");
console.log(x);
/*4*/
let y = "kitty";
console.log("the value of my variable y will be: 'kitty'");
console.log(y);
y = "doggo";
console.log("the value of my variable y will be: 'doggo'");
console.log(y);
/*5*/
Math.round(7.25);
let z = 7.25;
console.log(z);
let a = Math.round(z);
console.log(a);

function biggervalue(value1, value2) {
    if (value1 > value2) {
        return value1;
    } else {
        return value2;
    }
};
var d = biggervalue(a, z);
console.log(d);
/*6*/
let birds = ['crow', 'pigeon', 'turkey'];
console.log("the value of my variable birds will be: 'crow','pigeon','turkey'");
console.log(birds);
let favouriteAnimals = ['frogs', 'monkeys', 'cows'];
console.log(favouriteAnimals);
favouriteAnimals[favouriteAnimals.length] = 'baby pig';
console.log(favouriteAnimals);
/*7*/
let myString = "this is a test";
console.log(myString);
console.log(myString.length);
/*8*/
let foo = 3;
console.log("The value of my variable foo is: 3");
console.log("The type of my variable foo is: int");
let emptiness = null;
console.log("The value of my variable emptiness is: null");
console.log("The type of my variable emptiness is: null");
let fruit = "banana";
console.log("The value of my variable fruit is: 'banana'");
console.log("The type of my variable fruit is: string");
let bla;
console.log("The value of my variable bla is: undefined");
console.log("The value of my variable bla is: undefined");
console.log(typeof (foo));
console.log(typeof (emptiness));
console.log(typeof (fruit));
console.log(typeof (bla));

function compareType(x, y) {
    if (typeof (x) == typeof (y)) {
        return 'SAME TYPE';
    } else {
        return 'NOT THE SAME TYPE';
    }
};
console.log(compareType(foo, emptiness));
/*9*/
x = 7;
x = x % 3;
console.log("The value of x/3=2.33333333333");
console.log("The value of Math.round(7/3) is 2;");
console.log("It means 7 contains 2*3=6 which is two full parts if we take 3 as one part");
console.log("So this function shows remainings 7-6=1");
/*10*/
let example = [2, 'string', null, ];
console.log(example[0]);
console.log("You can store different data types in arrays in JavaScript");
6 / 0 === 10 / 0
console.log("You can compare infinities, the result will be boolean");