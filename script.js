let http = new XMLHttpRequest();
let resultGifs = document.getElementById("gifs")
let searchInput= document.getElementById('input-text')
let searchButton= document.getElementById('search-btn')
let errorMsg = document.getElementById('error-empty');
resultGifs.innerHTML=''

searchButton.addEventListener('click', function() {
resultGifs.innerHTML=''
let searchWord = searchInput.value 
if(searchWord === ''){
    errorMsg.classList.add('error');
    errorMsg.innerHTML = 'Please write something!'
}
else{
    errorMsg.innerHTML=''
    http.open('GET',`https://api.tenor.com/v1/search?q=${searchWord}&key=4KFJTSI1HT7A&limit=9`);
    http.responseType="json"

    http.onreadystatechange = function() {
    if (http.readyState === 4 && http.status === 200) {
        let result = http.response.results;
        print(result)
    } else if (http.readyState === 4 && http.status === 404){
        let notFound = document.createElement('p')
        notFound.innerHTML = 'not found'
    }
    };        
    http.send();
    }
})
function print(arr){
    for(let i=0; i<=arr.length; i++){
    let gifUrl=arr[i].media[0].gif.url;
    let newGif= document.createElement('img') ;
    newGif.setAttribute('src', gifUrl);
    newGif.setAttribute('alt','Loading...');
    newGif.innerHTML = gifUrl;
    resultGifs.appendChild(newGif)
}
}