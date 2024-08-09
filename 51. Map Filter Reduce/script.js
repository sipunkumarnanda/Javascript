const array2 = [1,2,3,4,5, "X" , 6 , 7 , "z" , 8]

array2.forEach((elem)=>{
    console.log(elem + " Good ");
})

let a = array2.map((elem)=>{
    return elem + 10
})
console.log("Map ", a);

let b = array2.filter((elem)=>{
    // console.log(elem);
    // return elem > 2
    if(typeof elem === "string"){
        return elem
    }
})
console.log("Filter " , b);


let c = array2.reduce((acc , currVal)=>{
    if(typeof currVal === "number"){
        return acc + currVal
    }
    return acc  // Explain Bellow 
}, 0)
console.log(c);

let d = array2.reduce((acc , currVal)=>{
    if(typeof currVal === "number"){
        return acc + currVal
    }
    else{
        return acc
    }
}, 0)
console.log(d);