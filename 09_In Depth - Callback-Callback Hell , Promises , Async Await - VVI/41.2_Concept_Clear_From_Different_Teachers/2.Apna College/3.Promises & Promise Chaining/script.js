
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
// let result = getData(123)
// console.log(result);


// Using callback -> Callback Hell
// getData(1,function(){
//     getData(2 , function(){
//         getData(3 , function(){
//             getData(4 , function(){
//                 getData(5)
//             })
//         })
//     })
// })

// Doing same thing using Promise chaining
// getData(1)
// .then(function(res){
//     console.log(res);
//     getData(2).then(function(res){
//         console.log(res);
//         getData(3).then(function(res){
//             console.log(res);
//         })
//     })
// })

// Doing the above same thing in more cleaner way

console.log("getting data1...");
getData(1)
.then(function(res){
    console.log("getting data2...");
    return getData(2)
}).then(function(res){
    console.log("getting data3...");
    return getData(3)
}).then(function(res){
    console.log("getting data4...");
    console.log(res);
})





//////////////////////////////////////

let getPromise = function(){
   return new Promise(function(resolve,reject){
        console.log("Iam a Promise");
        // resolve("Success")
        const error = new Error("Some error occurred")
        reject(error)
    })
}
// console.log(getPromise);

// let promise = getPromise()
// promise.then(function(res){
//     console.log("Promise Fulfilled" , res);
// }).catch(function(error){
//     console.log("Rejected" , error.message);
// })


////////////////////////////////////////////////
function asyncFunc(){
    return new Promise(function(resolve , reject){
        setTimeout(function(){
            console.log(" Data 1 ");
            resolve("Success")
        },4000)
    })
}

function asyncFunc2(){
    return new Promise(function(resolve , reject){
        setTimeout(function(){
            console.log(" Data 2 ");
            resolve("Success")
        },4000)
    })
}

// console.log("Fetching data1.....");
// let p1 = asyncFunc()
// p1.then(function(res){
//     console.log(res);
//     console.log("Fetching data2.....");
//     let p2 = asyncFunc2()
//     p2.then(function(res){
//         console.log(res);
//     })
// })

// Simplify the above function using .then() and .catch()

// console.log("Fetching data1.....");
// asyncFunc()
// .then(function(res){
//     console.log(res);
//     console.log("Fetching data2.....");
//     asyncFunc2()
//     .then(function(res){
//         console.log(res);
//     })
// })



//////////////////////////////////////


// We can do the same thing in more better way using Async Await
