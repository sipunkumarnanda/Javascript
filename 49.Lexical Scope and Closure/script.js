let a = 10 

function call(){
    let a = 20 
    function call2(){
        let a = 30 
        function call3(){
            console.log(a);
        }
        call3()
    }
    call2()
}

call()


// Lexical Scope 
function outer(){
    let username = "Ankita" 
    // console.log(secret);
    function inner(){
        let secret = "my123"
        console.log("Inner " , username);
    }
    function innerTwo(){
        console.log("InnerTwo " , username)
        // console.log(secret);
    }
    inner()
    innerTwo()
}
outer()
// console.log( "Too Outer ",username);


// closure
function makeFunc(){
    const name = "Mozilla"
    function displayName(){
        console.log(name);
    }
    return displayName
}

const myFunc = makeFunc()
myFunc() 


console.log("-----------------------------------------");
console.log("------------------In Real World----------------------");
// document.getElementById('orange').onclick = function(){
//     document.body.style.backgroundColor = "orange"
// }
// document.getElementById('green').onclick = function(){
//     document.body.style.backgroundColor = "green"
// }

// way-1 
// function clickHandler(color){
// //  document.body.style.backgroundColor = color
// return function(){
//      document.body.style.backgroundColor = color

// }
// }

// Also we can write like this 
function clickHandler(color){
    //  document.body.style.backgroundColor = color
    function changeColor(){
         document.body.style.backgroundColor = color
    }
    return changeColor
    }
console.log(clickHandler("yellow")); // it's return the changeColor function 

document.getElementById('orange').onclick = clickHandler('orange')
document.getElementById('green').onclick = clickHandler('green') 