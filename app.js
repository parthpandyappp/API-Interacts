import info from './secret.js'
const body = document.querySelector('body')
const button = document.querySelector('.button')
const word = document.createElement('h1')
const def = document.createElement('p')

const randomword = () => {
    fetch('https://random-word-api.herokuapp.com/word?number=1')
        .then(response => {
            return response.json();
        })
        .then(response => {
            word.textContent = response;
            body.appendChild(word)
            randomDefinition(word)

        })
        .catch(err => {
            console.log(err)
        })
}

const randomDefinition = (word) => {
    // console.log(word.textContent)
    fetch('https://dictionaryapi.com/api/v3/references/collegiate/json/'+(word.textContent)+"?key="+(info.API_KEY))
        .then(response => {
            return response.json();
        })
        .then(response => {
            if(response[0].shortdef!=null){
                def.textContent = "Definition : " + response[0].shortdef[0];
            }
            else{
                def.textContent = "No definition available"
            }
            body.appendChild(def)
            console.log(response[0].shortdef[0])
        })
        .catch(err => {
            console.log(err)
        })
}

button.addEventListener('click', function () {
    randomword();
})
