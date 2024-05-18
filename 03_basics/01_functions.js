function sayMyName(){
    console.log("S");
    console.log("I");
    console.log("P");          // Whole functions is called function defination EX- function name(){  // code}
    console.log("U");
    console.log("N");
}

//  sayMyName   // This is Function Reference 

// sayMyName()  // This is Function Execution 


/*   

function addTwoNumbers(number1, number2){    // parameters
    console.log(number1 + number2);
}
addTwoNumbers(3,4)             // arguments
addTwoNumbers(3,"4")
addTwoNumbers(3,"a")
addTwoNumbers(3,null)

const result = addTwoNumbers(3,5)
console.log("Result : " , result);  // undefiend

*/

function addTwoNumbers2(number1, number2){
    // let result = number1 + number2 ;
    // return result

    return number1 + number2 
}

const result = addTwoNumbers2(10,20)
console.log("Result : " , result);

console.log(3,5);



function logInUserMessage(userName = "Sam"){
    if(userName === undefined) // if(!userName)  also we can write like this 
        {
       console.log("Please enter a user name ");
       return
    }
    else{
        return `${userName} just logged In `
    }
}

console.log(logInUserMessage("Sipun"));

console.log(logInUserMessage());


// ******************************************************
console.log("*********************************************");



   // PASS MULTIPLE VALUES IN FUNCTION 

   function calculateCartPrice(...num1){     // [ 200, 400, 500 ]
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000));


const user = {
    userName : "Sipun" ,
    prices : 199 
}

function handleObject(anyObj){

    console.log(`username is ${anyObj.userName} and price is ${anyObj.price}`);
}

// handleObject(user)


// Passing Object 
handleObject({
    userName : "Sam" ,
    price : 399
})

// Passing Array 

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[0]
}

console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([2000,3000,4000,5000]));