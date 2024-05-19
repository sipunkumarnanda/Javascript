// const userEmail = "s@sipun.ai"
const userEmail = []

if (userEmail) {
    console.log("Got user email");
}else{
    console.log("Don't have user email");
}

// Falsy Values 

// false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN 

// Truthy Values 
// "0" , 'false' , " " , [] , {} , function(){} (empty function) , 


// How to check Array is empty or not 
if (userEmail.length === 0) {
    console.log("Array is empty");
}

// How to check Object is empty or not 
const emptyObject = {}

if (Object.keys(emptyObject).length === 0) {
    console.log("Object is empty");
}

console.log(false == 0);     // True
console.log(false == '');    // True
console.log(0 == '');        // True

// nullish Coalescing Operator (??): null undefined 


let val1;
val1 = 5 ?? 10 
console.log(val1);  // 5

val1 = null ?? 10 
console.log(val1); // 10

val1 = undefined ?? 15 
console.log(val1);   // 15

val1 = null ?? 10 ?? 15 
console.log(val1);   // 10


// Terniary Operator 

// condition ? true : false 
const iceTeaPrice = 100 
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("More than 80");