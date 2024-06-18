const grandParent = document.querySelector('#grandParent')
const parent = document.querySelector('#parent')
const child = document.querySelector('#child')


// // Bubbling by default third parameter False 
// grandParent.addEventListener('click' , ((e)=>{
//     console.log("GrandParent Clicked");
// }),false)

// parent.addEventListener('click' , ((e)=>{
//     console.log("Parent Clicked");
// }),false)

// child.addEventListener('click' , ((e)=>{
//     console.log("Child Clicked");
// }),false)



// // Capturing / Trickling by third parameter True
// grandParent.addEventListener('click' , ((e)=>{
//     console.log("GrandParent Clicked");
// }),true)

// parent.addEventListener('click' , ((e)=>{
//     console.log("Parent Clicked");
// }),true)

// child.addEventListener('click' , ((e)=>{
//     console.log("Child Clicked");
// }),true)



// Stop Propagation
grandParent.addEventListener('click' , ((e)=>{
    console.log("GrandParent Clicked");
    e.stopPropagation()
}),true)

parent.addEventListener('click' , ((e)=>{
    console.log("Parent Clicked");
    
}),true)

child.addEventListener('click' , ((e)=>{
    console.log("Child Clicked");
    
}),true)