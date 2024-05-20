// For Each loop

const codding = ["Js" ,"Ruby" , "Java" , "Python" , "CPP"]

// codding.forEach(function(item){
//     console.log(item);
// })


// using Arrow function
// codding.forEach((val)=>{
//     console.log(val);
// })


// Passing another function into For Each 
// function printMe(item){
//     console.log(item);
// }

// codding.forEach(printMe)

// ***********************************************
// codding.forEach( (item , index , arr)=>{
//     console.log(item , index , arr);
// })

const myCodding = [
    {
        languageName : "JavaScript" ,
        languageFileName : "js"
    },
    {
        languageName : "Java" ,
        languageFileName : "java"
    },
    {
        languageName : "Python" ,
        languageFileName : "py"
    },

]

myCodding.forEach( (item) => {
    console.log(item.languageName);
})