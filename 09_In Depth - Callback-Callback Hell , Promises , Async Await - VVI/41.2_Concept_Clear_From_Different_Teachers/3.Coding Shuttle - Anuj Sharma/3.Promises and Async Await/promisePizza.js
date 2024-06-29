function getCheese(){
    return new Promise(function(resolve,reject) {
        setTimeout(function(){
            const cheese = "🧀"
            resolve(cheese)
        },2000)
    })
}

function makeDough(cheese){
    return new Promise(function(resolve,reject) {
        setTimeout(function(){
            const dough = cheese + "🍩"
            resolve(dough)
            // reject("Bad Cheese")
        },2000)
    })
}
// console.log(makeDough());

function bakePizza(dough){
    return new Promise(function(resolve,reject) {
        setTimeout(function(){
            const pizza = dough + "🍕"
            resolve(pizza)
        },2000)
    })
}
// console.log(bakePizza());


// getCheese().then(function(cheese){
//     console.log("Here is the cheese " , cheese);
//     return makeDough(cheese)
// }).then(function(dough){
//     console.log("Here is the dough " , dough);
//     return bakePizza(dough)
// }).then(function(pizza){
//     console.log("Here is the pizza " , pizza);
// }).catch(function(err){
//     console.log("Error Occured " ,err);
// }).finally(function(){
//     console.log("Process Ended");
// })

async function orderPizza(){
    try{
        const cheese = await getCheese()
        console.log("Here is the cheese " , cheese);
        const dough =  await makeDough(cheese)
        console.log("Here is the dough " , dough);
        const pizza = await bakePizza(dough)
        console.log("Here is the Pizza " , pizza);
    }
    catch(error){
        console.log("Error occured ",error);
    }
}
orderPizza()