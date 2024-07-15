const div = document.querySelector('.container')
// console.log(div);

div.addEventListener('click' , ((event)=>{
    console.log(event.target);
    console.log(event.target.value); // Undefined
    console.log(event.target.innerText);
}))

const select = document.querySelector("select")
// console.log(select);

select.addEventListener('change' , ((event)=>{
    // console.log(event.target.value);
    // console.log(event.target.selectedOptions[0]);
    // console.log(event.target.selectedOptions);
    const selectedOption = event.target.selectedOptions

    console.log("----------------options--------------------------");
    console.log(event.target.options);

    console.log("---------------- Selected options--------------------------");
    console.log(event.target.selectedOptions);

    console.log("----------------Selected Index--------------------------");
    console.log(event.target.selectedIndex);
    

    console.log("------------------event.target.selectedOptions[event.target.selectedIndex]-------------------");
    console.log(event.target.selectedOptions[event.target.selectedIndex]);
    console.log("------------------event.target.options[event.target.selectedIndex]-------------------");
    console.log(event.target.options[event.target.selectedIndex]);

    // console.log(selectedOption[0]);
    // console.log(selectedOption);


    // updateFlag(event.target.selectedOptions[0])
    // updateFlag(event.target)
}))

function updateFlag(selectedFlag){
    console.log(selectedFlag);
    console.log(selectedFlag.value);

    // console.log(selectedFlag.parentElement.parentElement.querySelector('img'));

    const flag = selectedFlag.value
    let newSrc = `https://flagsapi.com/${flag}/flat/64.png` ;

    let img = selectedFlag.parentElement.parentElement.querySelector('img')
    img.src = newSrc
}

window.document.addEventListener('onload' , (()=>{
    updateFlag("IN")
}))



// Notes on - > Eventlistner on Select element - From chat Gpt 
// Notes on - > event.target.options vs event.target.selectedOptions , Selected Index 