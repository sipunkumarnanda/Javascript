// document.querySelector('#owl').onclick = function(){
//     alert("Owl clicked")
// }

// attachEvent()
// jQuery - on
// type of events , timestamp , defaultPrevented 
// target , toElement , srcElement , currentTarget 
// clentX , clienrY , screenX , screenY 
// altKey , ctrlKey , shiftkey , keyCode 

// document.querySelector('#owl').addEventListener('click' , function(e){
//     console.log(e);
// } , false)

// EventPropogation 
// document.querySelector('#images').addEventListener('click' , function(e){
//     console.log("Click inside the ul");
// },false)

// document.querySelector('#owl').addEventListener('click' , function(e){
//     console.log("Owl clicked");
//     e.stopPropagation()
// },false)

// PreventDefault
// document.querySelector('#google').addEventListener('click' , ((e)=>{
//     console.log("Google Clicked");
//     e.preventDefault()
//     e.stopPropagation()
// }), false)


// Project - Remove image by click on that image 
document.querySelector('#images').addEventListener('click' , ((e)=>{
    console.log(e.target.parentNode);
    console.log(e.target.tagName);
    if(e.target.tagName == 'IMG'){
        console.log(e.target.id);
        let removeIt = e.target.parentNode
        removeIt.remove()
    }

    // console.log(removeIt);
    // console.log(removeIt.parentNode);
    // removeIt.parentNode.removeChild(removeIt)
}))