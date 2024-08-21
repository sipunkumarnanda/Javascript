// closure is a function along with its lexical environment . 
message = "Good Global"
function helloOne(){
    let message = "Good morning"
    {
        let message = "Good afternoon"
        console.log("Hello One : " + message);
    }
    console.log(message);
    let c = function hello2(){
        console.log("Iam c " + message);
    }
    return c 
}
c = helloOne() 
c()

// EX-2 

function init(){
    var name = "Mozilla"  // name is a local variable created by init
    function displayName(){  // displayName() is the inner function , a closer 
        console.log(name);   // use variable declared in the parent function 
    }
    name = "Harry"
    return displayName
}

let func = init()
func()

function returnFunc(){
const x = () =>{
    let a = 1 
    console.log(a);
    const y = () =>{
        // let a = 2
        console.log(a);
        const z = () =>{
            // let a = 3 
            console.log(a);

        }
        z()
    }
    a = 999
    y()
}
return x 
}

let returnFunction = returnFunc()
returnFunction()