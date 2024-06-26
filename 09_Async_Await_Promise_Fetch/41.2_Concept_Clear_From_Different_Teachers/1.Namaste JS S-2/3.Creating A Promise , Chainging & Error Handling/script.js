// document.title = "Promise Chainging" ;

const cart = ["Shoes" , "Pants" , "Kurta"]

// const promise = createOrder(cart) // its gives OrderId
// console.log(promise);
// Write it in more cleaner fashion

createOrder(cart)
.then(function(orderId){
    console.log(orderId);
    return orderId
})
.then(function(orderId){
    return proceedToPayment(orderId)
})
.then(function(PaymentInfo){
    console.log(PaymentInfo);
})
.catch(function(err){
    console.log(err.message);
})
.then(function(){
    console.log("No matter what happens , i will definietely be called");
})



// ///

function createOrder(cart){
    const pr = new Promise(function(resolve,reject){
        // Logic for Create an Order 
        // Validate card
        // orderId

        if(!validateCard(cart)){
            const err = new Error("Cart is not valid")
            reject(err)
        }
        // Logic for create order
        const orderId = "12345"
        if(orderId){
            setTimeout(function(){
                resolve(orderId)
            },2000)
        }
    })

    return pr
}

function validateCard(cart){
    return false ;
}

function proceedToPayment(orderId){
    return new Promise(function(resolve,reject){
        resolve("Payment successful")
    })
}



// HW
// createOrder, 
// proceedToPayment , 
// showOrderSummery , 
// updateWallet