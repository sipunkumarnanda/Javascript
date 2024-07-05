
// Promise.all() - Suppose we have to make parallel Apis Call and get the result . (It is use to handle multiple Promises Together)

const promise1 = new Promise((resolve, reject) => {
    setTimeout(function(){
    //   resolve("promise1 Resolved")
      reject("promise1 Rejeced")
    },3000);
  });

  const promise2 = new Promise((resolve, reject) => {
    setTimeout(function(){
      reject("promise2 Rejeced")
    //   resolve("promise2 Resolved")
    },10000);
  });

  const promise3 = new Promise((resolve, reject) => {
    setTimeout(function(){
    //   resolve("Promise3 Resolved")
      reject("Promise3 Rejeced")
    },4000);
  });
  
//  Promise.all()

 Promise.all([promise1, promise2, promise3])
.then((values) => {
    console.log(values);
  })
  .catch(function(error){
    console.log(error);
  })

  // Promise.allSettled()

  Promise.allSettled([promise1, promise2, promise3]).then((values) => {
    console.log(values);
    console.log(values[0].reason);
  })

//   Promise.race()

Promise.race([promise1, promise2, promise3]).then((values) => {
    console.log(values);
  }).catch(function(err){
        console.log(err);
      }) 

//   Promise.any()

Promise.any([promise1, promise2, promise3]).then((values) => {
    console.log(values);
  }).catch(function(err){
    console.log(err);
  })