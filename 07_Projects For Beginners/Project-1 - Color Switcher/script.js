

function colorChanger(clrName){
    const body = document.querySelector('body')
    body.style.backgroundColor = clrName
}

const container = document.querySelector('.container')


// Using Click 
// container.addEventListener('click', ((event)=>{
//     const targetId = event.target.id 
//     console.log(targetId);
// }))


// Using onclick
container.onclick = ((event)=>{                // event = event object 
    const targetId = event.target.id 
    // console.log(targetId);
    colorChanger(targetId)
})

