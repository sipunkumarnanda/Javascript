// const tinderUser = new Object()   // singleton Object 
// const tinderUser = {}            // Non-Singleton Object


const tinderUser = new Object()

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com" ,
    fullName : {
        usersFullName : {
            firstName : "sipun" ,
            lastName : "Nanda"
        }
    }
}

// console.log(regularUser.fullName);
// console.log(regularUser.fullName.usersFullName.lastName);

const obj1 ={
    1 : "a" ,
    2 : "b"
}
const obj2 ={
    3 : "c" ,
    4 : "d"
}
const obj4 ={
    5 : "E" ,
    6 : "F"
}

// const obj3 = {obj1 , obj2}   // Wrong Way

const obj3 = Object.assign({}, obj1 , obj2 , obj4)   //The first is the target object, where all objects go. 
                                                    // obj3 is created by copying properties from obj1, obj2, and obj4 into a new object ({})
// console.log(obj3);


const realObj = { ...obj1 , ...obj2 , ...obj4 }
console.log(realObj);                 // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'E', '6': 'F' }

const users = [
    {
        id: 1 ,
        email : "h@gmail.com" ,
    } ,
    {
        id: 1 ,
        email : "h@gmail.com" ,
    } ,
    {
        id: 1 ,
        email : "h@gmail.com" ,
    }
]

users[1].email

console.log(tinderUser)                               // { id: '123abc', name: 'Sammy', isLoggedIn: false }
 
console.log(Object.keys(tinderUser))                     // [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser))                   // [ '123abc', 'Sammy', false ]
console.log(Object.entries(tinderUser))                 // [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn'));       // true
console.log(tinderUser.hasOwnProperty('isLoggedInn'));     // false



const course = {
    courseName : "JS In Hindi" ,
    price : 999 ,
    courseInstructor : "Hitesh"
}

// console.log(course.courseInstructor);

const {courseInstructor} = course
console.log(courseInstructor);  //Hitesh

// Also we can write like this 

const{courseInstructor : instructor} = course
console.log(instructor);    // Hitesh


// JSON 
// {
//     "name" : "Sipun" ,
//     "courseName" : "Js in Hindi" ,
//     "peice" : "Free"
// }

[
    {},
    {},
    {}
]