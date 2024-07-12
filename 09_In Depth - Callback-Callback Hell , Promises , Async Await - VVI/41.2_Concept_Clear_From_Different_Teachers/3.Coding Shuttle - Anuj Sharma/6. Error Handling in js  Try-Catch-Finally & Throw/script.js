try {
    console.log(age)
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}

const a = 2 * 4 
console.log( 'important kaam' , a);

try {
    const res = prompt("Are you a Robot?")
    if(res == "Y"){
        throw new Error ("Robot Found")
        // throw 12;
        // throw {
        //     name : "Sipun"
        // }
    }
} catch (error) {
    console.log(error);
    console.log(error.name);
    console.log(error.message);
}finally{
    console.log("Iam Finally");
}

console.log( 'important kaam2');


console.log("----------Another Example----------");
try {
    console.log("Before the error");
    // const age = 12
    console.log(age);
    console.log("After the age");
} catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error);
}
finally{
    console.log("From Finally");
}

console.log("Important Message 5");
