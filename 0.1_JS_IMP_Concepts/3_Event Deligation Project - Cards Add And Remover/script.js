const container = document.querySelector('.container')
const addCardButton = document.querySelector('.button')
let count = 1

addCardButton.addEventListener('click' , ((e)=>{
    const newCard = document.createElement('div')
    newCard.setAttribute('class' , 'box')
    newCard.textContent = count++
    container.appendChild(newCard)
}))

container.addEventListener('click' , ((e)=>{
    if(e.target.classList.contains('box')){
        e.target.remove()
    }
}))