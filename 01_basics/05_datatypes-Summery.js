// Primitive - All of these are call by value 

// 7 Types : String , Number , Boolean , null , undefined , Symbol (it helps to make any value unique) , BigInt 



// Non-Primitive or (Reference Type) - Call by Reference

// Array , Objects , Functions 

/* 
JavaScript is a dynamically typed language, 
which means that data types of variables are determined by the value they hold
at runtime and can change throughout the program as we assign different values to them.
*/


const score = 100
const scoreValue = 100.3 

const isLoggedIn = false 
const outsideTemp = null

let userEmail; // undefined 

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);


const bigNumber = 343552365672764546565672467436457436n ;
console.log(typeof bigNumber);


// Array 

const heros = [ "Shaktiman" , "naagraj" , "doga"] ;

let myObj = {
    name: "Sipun" ,
    age : 22 
}

// Function 

const myFun = function(){
 console.log("Hello World...!!");
}
myFun();

console.log(typeof bigNumber);
console.log(typeof myObj);
console.log(typeof myFun);
console.log(typeof id);
console.log(typeof anotherId);