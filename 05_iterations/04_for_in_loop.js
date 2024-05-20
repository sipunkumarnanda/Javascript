const myObject = {
    js: "Javascript" ,
    cpp: "C++" ,
    rb: "Ruby" ,
    swift: "swify by apple"
}

for (const key in myObject) {
//    console.log(key);
}

for (const key in myObject) {
//    console.log(myObject[key]);
//    console.log(`${key} shortcut is for ${myObject[key]}`);
}



// In Arrays 
const programming = ["JS" ,"Ruby", "Python" ,"Java" , "CPP"]

for (const key in programming) {
    console.log(programming[key]);
}

const map = new Map()
map.set('IN' , "India")
map.set('USA' , "United State Of America")
map.set('FR' , "France")
map.set('IN' , "India")

// for (const key in map) {
//    console.log(key);
//    console.log(map[key]);
// }   // for in dosn't work in map because it is not iterable 




/* 
Note : - 

-->  Using a (for...in) loop with a Map object in JavaScript isn't appropriate 
because (for...in) is meant for iterating over the enumerable properties of objects,
not the elements of a Map.

-->  Instead, you can use the (for...of) loop to iterate over a Map.
*/