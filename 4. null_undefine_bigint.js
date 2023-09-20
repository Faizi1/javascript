/* undefined */

// using let
let username;
console.log(username);         // give output undefined

// using var
var username2;
console.log(username2);         // give output undefined

// using const
// const user;                 // SyntaxError: Missing initializer in const declaration


/* null */
console.log(typeof null);     //give typeof null is: object, its a bug in js, but it is use 


/* BigInt */
// if we want to store big interger number we use BigInt
let myNumber = BigInt(12123232323232232232323);   //bigint number
let sameNUmber = 1212121331n; 
console.log(typeof sameNUmber, sameNUmber);
console.log(typeof myNumber, myNumber);