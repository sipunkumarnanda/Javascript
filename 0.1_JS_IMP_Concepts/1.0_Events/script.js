const parent = document.querySelector('#parent')
parent.addEventListener('click', ((e)=>{
    if(e.target.classList.contains('child')){
        console.log( 'Clicked element: ' + e.target.textContent);
    }
}))