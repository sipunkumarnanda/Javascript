
function getSquare(num , callbackFun){
    setTimeout(function(){
        callbackFun(num*num)
    },1000)
}

// callback Hell -> Pyramid Of Doom
// getSquare(2 , function(result){
//     console.log(result);
//     getSquare(result , function(result2){
//         console.log(result2);
//         getSquare(result2,function(result3){
//             console.log(result3);
//         })
//     })
// })

// Inversion Of Control (IOC)

function getUserDetails(callbackFun){
    setTimeout(function(){
        callbackFun({userName : "Ankit" , userId : "123"})
    },1000)
}
function getPosts(userId , callbackFun){
    setTimeout(function(){
        callbackFun(['post1' , 'post2'])
    },1000)
}

getUserDetails(function(userDetails){
    console.log(userDetails);
    getPosts(userDetails.userId , function(posts){
        console.log(posts);
    })
})

