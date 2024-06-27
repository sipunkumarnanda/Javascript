
// Async Function always return a promise .
async function hello(){
    console.log("hello");
}
// console.log(hello());

function api(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log(("Weather data"));
            resolve(200)
        },2000)
    })
}

async function getWeatherData(){
    await api()  // 1st call
    await api()  // 2nd call
}

// getWeatherData()

//////////////////////////////////////


function getData(dataid , getNextdata){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log("Data" , dataid);
            resolve("Success")
            // reject("Error")
            if(getNextdata){
                getNextdata();
            }
        },2000)
    })
}

// Async Await
async function getAllData(){
    console.log("getting data1...");
    await getData(1)
    console.log("getting data2...");
    await getData(2)
    console.log("getting data3...");
    await getData(3)
}

// getAllData() 

// IIFE
(async function (){
    console.log("getting data1...");
    await getData(1)
    console.log("getting data2...");
    await getData(2)
    console.log("getting data3...");
    await getData(3)
})()