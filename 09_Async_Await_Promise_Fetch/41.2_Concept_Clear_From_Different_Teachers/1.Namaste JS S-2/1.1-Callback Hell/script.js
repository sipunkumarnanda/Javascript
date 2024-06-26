// console.log("Namaste");

// setTimeout(function (){
//     console.log("Javascript");
// },5000)

// console.log("Season-2");

// Ex

const cart = ["Shoes" , "Pants" , "Kurta"]

// api.createOrder(cart , function(){

//     api.proceedToPayment(function(){

//         api.showOrderSummery(function(){

//             api.updateWallet()

//         })

//     })

// })

// Inversion Of Control 


api.createOrder(cart , function(){

    api.proceedToPayment()
    
})
