let students = [
    {id:"001" , name: "Anish" , sports: "Cricket"} ,
    {id:"002" , name: "Smriti" , sports: "Basketball"} ,
    {id:"003" , name: "Rahul" , sports: "Cricket"} ,
    {id:"004" , name: "Bakul" , sports: "basketball"} ,
    {id:"005" , name: "Nikita" , sports: "Hockey"}
]

let newArray = students.filter((currValue , index , array)=>{
    // return currValue
    if(currValue.id % 2 == 0){
        return true
    }else{
        return false
    }
})
console.log(newArray);
console.log(students);


let cricketLover = students.filter(function(student){
        return student.sports == "Cricket"
})
console.log(cricketLover);


// Map - > Helps to Modify 

// const names = students.map((currValue , index , array)=>{
//     // return currValue.name
//     return `<li>${currValue.name}</li>`
// })
// console.log(names);
// const div = document.querySelector("#container")

// div.innerHTML = `<ul>${names.join(" ")}</ul>`

////////////////////////////////////

const names = students.map((currValue) => {
    const li = document.createElement('li');
    li.textContent = currValue.name;
    return li;
})

console.log(names);


const div = document.querySelector("#container")

names.forEach((li) => {
    div.appendChild(li);
})