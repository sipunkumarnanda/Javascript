// Nesting 

let age = 19 
if(age>=18){
    if(age>=60){
        console.log("Senior");
    }else{
        console.log("Middle");
    }
}else{
    console.log("Child");
}

// Nested loop

for(let i = 0 ; i<5 ; i++){
    let str =" "
    for(let j = 0 ; j<5 ; j++){
    str = str + j ;
    }
    // console.log( i, str);
}


// Callback hell
function getData(dataId , getNextData){
    console.log(("Getting Data"+dataId+"...."));
    setTimeout(function(){
        console.log("Data" , dataId);
        if(getNextData){ // Here we check if any function is passed as argument while calling getData() function
            getNextData()
        }
    },2000)
}

// Here i want data-1 First , then data-2 after few seconds , & data-3 after few seconds . Not at a Time . we need dealy over here

/* 
getData(1)
getData(2)
getData(3)
it will Print at a Time 
*/

// Using callbacks
// Callback hell - callback inside callback - Nested callback
getData(1,function(){
    getData(2 , function(){
        getData(3 , function(){
            getData(4 , function(){
                getData(5)
            })
        })
    })
})

// For Solving callback Hell we use Promises 