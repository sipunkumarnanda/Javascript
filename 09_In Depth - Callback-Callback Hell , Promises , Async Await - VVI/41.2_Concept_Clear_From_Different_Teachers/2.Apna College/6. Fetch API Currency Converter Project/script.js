const BASE_URL = "https://2024-03-06.currency-api.pages.dev/v1/currencies" ;

const dropDown = document.querySelectorAll(".select-container select")   // Return Node List -> Iterable using for of
// console.log(dropDown);

const btn = document.querySelector('button')
// console.log(btn);

const fromCurr = document.querySelector('.from select')
// console.log(fromCurr.value);

const toCurr = document.querySelector('.to select')
// console.log(toCurr.value);

const msg = document.querySelector(".msg")



//   for (const currCode in countryList) {
//       console.log("Objects Key");
//       console.log(currCode);
  
//       console.log("Objects Value");
//       console.log(countryList[currCode]);
//     }

for (const select of dropDown) {
    for (const currCode in countryList) {
        const option = document.createElement('option')
        option.innerText = currCode
        option.value = currCode
        select.appendChild(option)

        if(select.name === "from" && currCode == "USD"){
            option.selected = "selected"
        }else if(select.name === "to" && currCode == "INR"){
            option.selected = "selected"
    }
}
    select.addEventListener("change" , ((event)=>{
        // console.log(event.target.value);
        // updateFlag(event.target.value)   // if we do like this then we will get the value , then further we can't get the image tag
        // console.log(event.target);
        console.log(event.target.options[event.target.selectedIndex]);  // Print selected option tag
        updateFlag(event.target)
    }))
}

function updateFlag(targetedFlag){
    console.log(targetedFlag);
    let currCode = targetedFlag.value ;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png` ;
    let element = document.querySelectorAll(".select-container")
    let img = targetedFlag.parentElement.querySelector("img") ; 
    img.src = newSrc ;
}

btn.addEventListener('click' , ((event)=>{
    event.preventDefault()

    updateExchangeRate()
}))

async function updateExchangeRate(){
    let amount = document.querySelector(".amount input")
    console.log(amount);
    
    let amountVal = amount.value
    console.log(amountVal);
    if(amountVal === "" || amountVal<1){
        amountVal = 1
        amount.value = 1
    }

    const currUrl = `https://2024-03-06.currency-api.pages.dev/v1/currencies/${fromCurr.value.toLowerCase()}.json`
    let response = await fetch(currUrl)
    const data = await response.json()

    // console.log(data.usd.inr);

    let convertedAmount = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()]
    console.log(convertedAmount);

    const finalAmount = convertedAmount * amountVal
    msg.innerText = `${amountVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`
}

window.document.addEventListener('onload' , () => {
    updateExchangeRate() ;
})