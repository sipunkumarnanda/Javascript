// if statement 

if(true){
    
}

if(false){

}

const isUserloggedIn = true
if(isUserloggedIn){

}

// < , > , <= , >= , == , != , === (Strict check ) , !==

if(3 != 2){
    console.log("Execute");
}

if(2 == "2"){
    console.log("Executed 2");
}
if(2 === "2"){
    console.log("Executed 2 (===)");
}

if(2 !== "2"){
    console.log("Executed 2 (!==)");
}

const temperature = 41 

if(temperature < 50 ){
    console.log("less than 50");
} else {
    console.log("temperature is greater than 50");
}

const score = 200 

if(score > 100){
    const power = "fly"
    console.log(`user power : ${power}`);
} 
// console.log(`user power : ${power}`);

const balance = 1000 

// Implicit Scope  
if(balance > 500) console.log("Test") , console.log("Test 2");

if(balance < 500){
    console.log("less than 500 ");
} else if (balance < 750){
    console.log("less than 750 ");
} else if(balance < 900){
    console.log("less than 900 ");
}else{
    console.log("less than 1200 ");
}

const userLoggedIn = true 
const debitCard = true 
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard && 2==2){
    console.log("Allow to buy courses");
} 

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
}