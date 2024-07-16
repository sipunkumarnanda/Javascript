const div = document.querySelector('.name')
console.log(div);

div.addEventListener('click' , ((event)=>{
    console.log(div.parentElement);
    const img = div.parentElement.querySelector('img')
    console.log(img);
    img.src = `https://avatars.githubusercontent.com/u/98945228?v=4`
}))



async function getdata(){
    const currUrl = `https://2024-03-06.currency-api.pages.dev/v1/currencies/usd.json`
    let response = await fetch(currUrl)
    const data = await response.json()
    console.log(data);
    console.log(data.usd.inr);

    let currUsd = "usd"
    let currInr = "inr"
    console.log(data.currUsd.currInr);
    console.log(data[currUsd][currInr]);
}
getdata()

const select = document.querySelector('select')

select.addEventListener('click' , ((event)=>{
    // console.log(event.target);
    console.log(event.target.value);   // it works on click and also change
}))

const selects = document.querySelectorAll('select')
console.log(selects);

for (const selectTag of selects) {
//    console.log(selectTag.name)
   if(selectTag.name === "from"){
    console.log("Iam From");
   }else if(selectTag.name === "to"){
    console.log("Iam To");
   }else{
    console.log("Don't Match");
   }
}