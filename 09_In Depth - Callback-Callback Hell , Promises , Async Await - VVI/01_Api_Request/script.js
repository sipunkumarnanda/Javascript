const requestUrl = 'https://api.github.com/users/hiteshchoudhary'
const xhr = new XMLHttpRequest() 
xhr.open('GET' , requestUrl)
xhr.onreadystatechange = function(){
    console.log(xhr.readyState);
    if (xhr.readyState === 4) {
       const data = JSON.parse(xhr.responseText)
       console.log(typeof data);
       console.log(data.followers);
       console.log(data.
        avatar_url
        );

        const img = document.querySelector('#img')
        img.setAttribute('src' , data.avatar_url)
        const followers = document.querySelector('#followers')
        followers.innerHTML = data.followers
    }
}
xhr.send()

