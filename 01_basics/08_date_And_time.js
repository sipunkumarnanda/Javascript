let myDate = new Date() 
console.log(myDate.toString())              // Tue May 14 2024 11:50:35 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString())          // Tue May 14 2024
console.log(myDate.toISOString())           // 2024-05-14T11:50:35.546Z
console.log(myDate.toJSON())                // 2024-05-14T11:50:35.546Z
console.log(myDate.toLocaleString())        // 5/14/2024, 11:50:35 AM
console.log(myDate.toLocaleDateString())    // 5/14/2024
console.log(typeof myDate)                  // object

let myCreatedDate = new Date(2023 , 0 , 23 , 5 , 3 ) ;
console.log(myCreatedDate.toLocaleDateString());


let myCreatedDate2 = new Date("2024-01-21") ;
console.log(myCreatedDate2.toLocaleDateString());


let myCreatedDate3 = new Date("01-21-24") ;
console.log(myCreatedDate3.toLocaleDateString());


let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate3.getTime());

console.log(Date.now()/1000);


let newDate1 = new Date()
console.log(newDate1);
console.log(newDate1.getMonth());
console.log(newDate1.getDate());
console.log(newDate1.getDay());
console.log(newDate1.getTime());
console.log(newDate1.getMinutes());

console.log(`Date: ${new Date().getDate()} Month: ${new Date().getMonth()} Year: ${new Date().getFullYear()}`);

newDate1.toLocaleString('default' , {
    weekday: "long"
})