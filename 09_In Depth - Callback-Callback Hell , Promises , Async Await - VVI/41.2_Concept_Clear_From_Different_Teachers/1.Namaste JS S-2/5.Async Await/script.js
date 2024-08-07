
/////////////////////////////////
// Always return a promise
// async function getData(){
//     return p
// }

// const dataPromise = getData()
// dataPromise.then((response)=>{
//     console.log(response);
// })
//////////////////////////////////////////////////////

// Await - await is a keyword that can only be used inside a Async Function 

const p1 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("  Promise Resolved Value...!!")
    },10000)
})


const p2 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("  Promise Resolved Value...!!")
    },5000)
})

async function handlePromise(){
    console.log("Hello World");
    // Js Engine was waiting for promise to resolve 
    const val = await p1; 
    console.log("Namaste JS-1");
    console.log(val);

    const val2 = await p2; 
    console.log("Namaste JS-2");
    console.log(val2);
}
// handlePromise()

const functionCall = document.getElementById('function')
functionCall.addEventListener("click" , (e)=>{
    handlePromise()
} )
// function getData(){
//    p.then((result)=> {
//     console.log(result)
//     console.log("Namaste JS-2");
//    })
//    console.log("Namaste JS-1");
// }
// getData()



////////////////////////////////////
// Example-2
async function promsie(){
    let p1 = new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log("Resolved-1");
            resolve(202)
        },2000)
    })
    let p2 = new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log("Resolved-2");
            resolve(202)
        },2000)
    })

    let a =await Promise.all([p1,p2])
console.log(a[1]);
}
// promsie()
///////////////////////////////////////////
let time = document.querySelector(".clock")
let count = 1 ;
setInterval(()=>{
    // let date = new Date().toLocaleTimeString()
    time.innerHTML = count;
    count++;
},1000)

///////////////////////////////////////////////////

const apiUrl = 'https://api.github.com/users/akshaymarch7'
async function fetchApi(){
   try {
    const data = await fetch(apiUrl)
    const jsonValue = await data.json()
    console.log(jsonValue.name);
   } catch (error) {
    console.log(error);
   }
}
fetchApi()


// Interview Tips 

/*
1. What is Async Await ? 
Ans - Async is a keyword which is used with function , (async Function is a different thing) , And await can only used only inside Async Function . To Handle Promises .

-> Promises are Asynchronous .

*/