// Reduce 

const myNums = [1,2,3]

const initialValue = 0 

const myTotal = myNums.reduce((acc , currVal)=>{
    // console.log(`acc: ${acc} , Current Value : ${currVal}`);
    return acc + currVal 
} , 0 )
// console.log(myTotal);



const shoppingCart = [
    {
        itemName : "Js Course" ,
        price : 2999
    },
    {
        itemName : "Python" ,
        price : 999
    },
    {
        itemName : "Mobile Dev" ,
        price : 5999
    },
    {
        itemName : "Data Science" ,
        price : 12999
    }
]


const priceToPay = shoppingCart.reduce((acc , item)=>{
    // console.log(`Accumulator : ${acc} , Item : ${item.price}`);
    return acc + item.price 
},0)

console.log(priceToPay);