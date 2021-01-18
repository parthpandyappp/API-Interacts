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
            word.textContent = "/" + response;
            document.getElementById("demo").appendChild(word)
            randomDefinition(word)

        })
        .catch(err => {
            console.log(err)
        })
}

const randomDefinition = (word) => {
    // console.log(word.textContent)
    fetch('https://dictionaryapi.com/api/v3/references/collegiate/json/'+(word.textContent)+"?key="+"0434c413-f173-4f94-948d-a4ae26f3447f")
        .then(response => {
            return response.json();
        })
        .then(response => {
            if(response[0].shortdef!=null){
                def.textContent = response[0].shortdef[0];
            }
            else{
                def.textContent = "No definition available"
            }
            document.getElementById("demo").appendChild(def)
            console.log(response[0].shortdef[0])
        })
        .catch(err => {
            console.log(err)
        })
}

button.addEventListener('click', function () {
    randomword();
})
