
// Following two lines will run successfully due to Hoisting . 
console.log(a);
greet()
function greet(){
    console.log("Good morning");
}

 var a= 9;  // Declaration Hoisted to the top but initialization is not 
console.log(a); 

// let a = 10  // Temporary Dead Zone 

// greetTwo()

// const greetTwo = (()=>{
//     console.log("Iam Greet Two");
// })  
 // Function Expressions and class expressions are not hoisted 