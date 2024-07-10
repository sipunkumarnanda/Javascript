"use strict" ;

// This In Global Scope 
console.log(this);   // this keyword in Global Space always represent the Global Objects

// this insde a function 
function x(){
    // Function Space 
    console.log(this);
    //the value depends on Strict and non-strict mode
}


// this in Non-string mode - (this Substitution)

// if the value of this keyword is undefiend or null -> this keyword will be replaced with Global Object , Only in Non-Strict Mode 

// this value depends on how the Function is called (window)

x() // Undefined

window.x() 

// this inside a objects's method 

const student = {
    name : "Sipun" , 
    printName : function(){
        console.log(this);      // Value of this keyword is object
        console.log(this.name);
    }
    // If a function is write inside an Object Is known as Method 
    // Here X is a Method of an Oject OBJ
}
// console.log(student);
student.printName()

const student2 = {
    name : "Deepika" , 
}

// call apply bind methods (Sharing methods)

student.printName.call(student2) // Value of this = Student2

// this inside arrow function 
const obj1 = {
    a: 10 ,
    x : function(){
        console.log(this);
    }
}
obj1.x()
////////////////////////////////
const obj2 = {
    a: 20 ,
    x : ()=>{
        console.log(this);
    }
}
obj2.x()

// this inside nested arrow function 
const obj3 = {
    a: 50 ,
    x : function(){
        // enclosing lexical context
        const y = ()=>{
            console.log(this);
        }
        y()
    }
}
obj3.x()
// this inside DOM elements => Refrenece to the HTML Element  



