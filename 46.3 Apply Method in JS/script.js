// apply() Method in JS 
// The apply() Method is similar to the call() method . 
// The call() Method takes arguments separately.
// The apply() Method takes arguments as an array . 


const youtuber1 = {
    name : "Thapa Technical" ,
    content : "Programming" , 
    feature : function(rating , support){
        console.log(`Very friendly way of Teaching. ${this.name} is my fav ${this.content} channel. And I will love to give ${rating} star . PLease ${support} ${this.name} Channel . `);
    }
}

youtuber1.feature(4 , "Subscribe")

console.log("------------ Call() Method --------------");
const youtuber2 = {
    name : "Sipun kumar Nanda" , 
    content : "Programming - 2 "
}

youtuber1.feature.call(youtuber2 , 5 , "Subscribe")   // Directly Call



console.log("------------ Apply() Method --------------");

youtuber1.feature.apply(youtuber2 , [10 , "Subscribe"])

const max = Math.max(10,20,30)
console.log(max);

const arrayMax = Math.max.apply(null , [11,20,99])
console.log(arrayMax); 
