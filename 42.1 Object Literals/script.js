let name = "Sipun Kumar"
let course = "Btech"

let obj = {
    name: name ,
    course: course
}
console.log(obj);

//////////////////////////////////////
let obj2 = {
    name,
    course
}
console.log(obj2);
console.log(obj2.course);

////////////////////////////////

// Object Literals : Use variable as a Property Name 
console.log("----------Object Literals : Use variable as a Property Name-----------------");

let n = "name"

let obj3 = {
    [n]: "Yahoo Baba" ,
    course : "Btech"
}
console.log(obj3);
console.log(obj3.name);  // Yahoo Baba

////////////////////////////////////////////////////

// Arithmatic Operation 
console.log("---------Arithmatic Operation Inside Object Key---------");

let s = "student"

let obj4 = {
    [s + "Name"]: "Yahoo Baba" ,
    course : "Btech"
}
console.log(obj4);
console.log(obj4.studentName);  // Yahoo Baba

////////////////////////////////
console.log("--------Example-2-----------------");
let x = "student"

let obj5 = {
    [x + "Name"]: "Yahoo Baba" ,
    course : "Btech" ,
    detail : function(){
        return `${this.studentName} is student of ${this.course}`
    }
}
console.log(obj4);
console.log(obj4.studentName); 
console.log(obj5.detail());

//////////////////////////////////

// Object Literals : New Function Syntax 
console.log("--------------Object Literals : New Function Syntax ------------------");

// Old Method
console.log("---------Old Method-------------");
let obj6 = {
    name : "Sipun Kumar" ,
    show : function(){
        console.log(this.name);
    }
}
console.log(obj6.show());

// New Method - ES 6
console.log("-----------New Method - ES 6----------------");
let obj7 = {
    name : "Yahoo Baba" ,
    course : "Btech" ,
    detail (){
        return `${this.name} is student of ${this.course} - 1`
    } ,
    // 
    'detail show'(){
        return `${this.name} is student of ${this.course} - 2`
    }
}
// console.log(obj7.detail());

// New Way to call Function 
console.log(obj7['detail']());

console.log(obj7["detail show"]());

/////////////////////////////////

let fName = "Sipun Kumar" 
let lName = "Nanda"
let course1 = "Btech" 

function student(firstname , lastName , course){
    let fullName = firstname +" " + lastName
    return {fullName , course }   // Return an Object 
}
console.log(student(fName , lName , course1));

let a = student("Samkis" , "Pradhan" , "Civil")
console.log(a);
console.log(a.fullName);
console.log(a.course);