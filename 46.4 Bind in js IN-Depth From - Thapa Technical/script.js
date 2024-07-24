// bind() Method 

// By this method , we can bind an Object to a common function , so that the function gives different result when its need 

const youtuber = {
    name : "Thapa Technical" ,
    content : "Programming" ,
    feature : function(){
        console.log(`My Fav Youtuber name is ${this.name} . He made videos on ${this.content} topics`);
    }
}

youtuber.feature()

let youtuberFun = youtuber.feature // We can't do like this . 
youtuberFun()

// The bind() Methods takes an object as an first argumnets and creates a new function . 

let youtuberFun2 = youtuber.feature.bind(youtuber)
youtuberFun2()

console.log("---------------------------------------------------");

const youtuber1 = {
    name : "Thapa Technical" ,
    content : "Programming" ,
}
const youtuber2 = {
    name : "Sipun Tech" ,
    content : "Programming-2" ,
}
const youtuber3 = {
    name : "My Tech - 3" ,
    content : "Programming - 3" ,
}


function features(rating){
    console.log(`My Fav Youtuber name is ${this.name} . He made videos on ${this.content} topics . I will love to give ${rating} star . `);
}



features()// we can't call like this 

const you1 = features.bind(youtuber1 , 5)   // It's return a function 
console.log(you1);
you1()

console.log("------------------------");
const you2 = features.bind(youtuber2 , 4)   // It's return a function 
console.log(you2);
you2()

