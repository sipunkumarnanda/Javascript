// Promise 
const GITHUB_API = "https://api.github.com/users/akshaymarch7"

const user = fetch(GITHUB_API)

console.log(user);

user.then(function(data){
    console.log(data);
})


// Call Back hell

const cart = ["Shoes" , "Pants" , "Kurta"]

createOrder(cart , function(orderId){
    proceedToPayment(orderId , function(paymentInfo){
        showOrderSummery(paymentInfo , function(){
            updateWalletBalance()
        })
    })
})


// Using Promise chaining
createOrder(cart)
.then(function(orderId){
    return proceedToPayment(orderId)
})
.then(function(paymentInfo){
    return showOrderSummery(paymentInfo)
})
.then(function(paymentInfo){
    return updateWalletBalance(paymentInfo)
})

