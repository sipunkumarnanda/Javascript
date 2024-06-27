// console.log("Hello");
// setTimeout(function(){
//     console.log("This will execute later");
// },2000)
// console.log("World");
// console.log("Three");



function getCheese(callback){

    setTimeout(function(){
       const cheese = "🧀"
       console.log("here is cheese" , cheese);
       callback(cheese)
   },2000)
}

/*
getCheese(function(cheese){
   // console.log("Got the cheese" , cheese);
   return cheese  // In JavaScript, you can't directly return a value from an asynchronous callback to the outer scope. The return value of the callback function is only available within the context of the callback itself.
})
*/

function makeDough(cheese , callback){
   setTimeout(function(){
       const dough = cheese + "🍩"
       console.log("Here is the Dough" , dough);
       callback(dough)
   },2000)
}

function bakePizza(dough , callback){
   setTimeout(function(){
       const pizza = dough + "🍕"
       console.log("Here is the Pizza" , pizza);
       callback(pizza)
   },2000)
}


getCheese(function(cheese){
  makeDough(cheese , function(dough){
   bakePizza(dough,function(pizza){
       console.log("got my pizza" , pizza);
   })
  })
})


// Process Of making Pizza 
// pizza -> dough -> cheese