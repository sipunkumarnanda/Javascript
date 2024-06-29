const ticket = new Promise(function(resolve,reject){
    const isBorded = true
    if(isBorded){
        resolve("You are not in the flight")
    }else{
        reject("Your flight has been cancelled")
    }
})

ticket.then(function(data){
    console.log("Wohho",data);
}).catch(function(data){
    console.log("Ohh No ",data);
}).finally(function(){
    console.log("I will always be executed");
})

// 