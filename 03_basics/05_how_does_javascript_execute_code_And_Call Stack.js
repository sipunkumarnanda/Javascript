let val1 = 10 
let val2 = 20 

function addTwoNum(num1 , num2){
    let total = num1 + num2   
     return total
}

let result1 = addTwoNum(val1 , val2)
let result2 = addTwoNum(5, 2)


// 

function one(){
    console.log("One");
    two()
}
function two(){
    console.log("Two");
    three()
}
function three(){
    console.log("Three");
}

one()
two()
three()