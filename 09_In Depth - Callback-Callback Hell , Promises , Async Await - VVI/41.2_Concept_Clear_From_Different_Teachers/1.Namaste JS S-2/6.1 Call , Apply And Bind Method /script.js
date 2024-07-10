let name = {
    firstName: "Sipun Kumar" ,
    lastName: "Nanda" ,
}

// function printFullName(){
//     console.log(this.firstName+" "+this.lastName);
// }

// or

let printFullName = function (homeTown , state){
    console.log(this.firstName+" "+this.lastName +" From "+homeTown +" , " + state);
}
console.log("------------------Call Method------------------");
// name.printFullName() 
// Also we can write like this 
printFullName.call(name , "BBSR" , "Odisha")

let name2 = {
    firstName: "Deepika",
    lastName: "X"
}
// Function Borrowing 
printFullName.call(name2 ,"Puri" , "OD")


// Apply Method 
console.log("------------------Apply Method------------------");
printFullName.call(name , ["BBSR" , "Odisha"])
printFullName.apply(name2 ,["Puri" , "OD"])

// Bind Method 
console.log("------------------Bind Method------------------");
let printMyName = printFullName.bind(name2 ,"Puri" , "OD")
console.log(printMyName);
printMyName()