console.log("One");
console.log("Two");

setTimeout(function hello(){
    console.log("Hello");
},1000)

console.log("Three");

// Callbacks
function sum(a, b){
    console.log(a+ b);
}

function calculator1(a, b, CallbackFun){
    CallbackFun(a,b)
}
// / calculator(10, 20, sum) // passing function name as 3rd arguments

// also we can give the whole function as argumnets
calculator1(10, 10, function(a,b){
    console.log(a+b);
})

// Using return 
function calculator(a, b, CallbackSum){
   const result =  CallbackSum(a, b)
   console.log(result);
}
calculator(100, 101, function(a,b){
    return a+b
})


// Using SetTimeOut

const hello = () =>{
    console.log("hello Sipun");
}

setTimeout(hello,2000) // SetTimeOut Takes an Callback Function as arguments

