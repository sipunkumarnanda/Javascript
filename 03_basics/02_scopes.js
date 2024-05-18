// {}// Scope 



// var c = 300 
let a = 300 

if(true){
    let a = 10 
    const b = 20
 // var c = 30 

//  console.log("Inner : " , a);
}

// console.log(a);
// console.log(b);
// console.log(c);

// console.log(a);

function one(){
    const userName = "Sipun" 

    function two(){
        const website = "Youtube"
        console.log(userName);
    }
    // console.log(website);

    two()
}
one()

if(true){
    const userName = "Sipun1" 
    if(userName === "Sipun1"){
        const website = " youtube"
        console.log(userName + website);
    }
    // console.log(website);
}

// console.log(userName);


// **************** Intresting *********************

addOne(5)
console.log(addOne(5));
function addOne(num){
    return num + 1 
}


// addTwo(5) 
const addTwo = function(num){              // const/ let funcName = function(){ // code }
    return num + 2 
}

// addOne(5)
// addTwo(5)
