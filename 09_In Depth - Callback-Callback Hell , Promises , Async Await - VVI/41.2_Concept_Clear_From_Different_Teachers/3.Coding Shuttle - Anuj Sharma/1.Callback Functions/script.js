document.body.style.backgroundColor = "black"

// Arrow Function 

const greet = (count) =>{
    for(let i = 1 ; i <= count ; i++){
        console.log("Hello word" , i);
    }
}

greet(5)

// In Arrow Function left side of = is called Function Expression & Right side of = is called Function Defination 

// Function Expression 
const square = (num) => num * num

// Way of calling 
// Method - 1
console.log(square(5));
// Method - 2
// let result = square(3)
// console.log(result);

const square1 = (num) => {
    return num * num
}
console.log(square1(1000));

///////////////////////////////////////

// Callback Function 

const calculate = function(a,b , operation){
    return operation(a,b)
}

// Method - 1
const addition = calculate(10,20 , function(num1, num2){
    return num1 + num2 
} )
console.log(addition);

// Method - 2
const subtraction = function(a,b){
    return a - b 
}

const subResult = calculate(5,3,subtraction)
console.log(subResult);

// Method - 3 
function multiply(a,b){
    return a * b 
}

const multiResult = calculate(10,20,multiply)
console.log(multiResult);