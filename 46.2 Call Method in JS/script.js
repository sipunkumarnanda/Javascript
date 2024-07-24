// call() Method in JS 
// The call() Method is a predefined Javascript method . 
// With call() , an Object can use a method belonging to another object . 

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

