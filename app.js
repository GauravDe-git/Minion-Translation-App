//Declaring the variables
var translatebutton = document.querySelector("#btn-translate");
var textinput = document.querySelector("#txt-input");
var outputtext = document.querySelector("#output");
var url = "https://api.funtranslations.com/translate/minion.json";

//Function to translate the URL
function translateURL(input) {
    return url + "?" + "text=" + input;
}

//Function to handle error
function errorHandler()
{
    alert("App used for 5 times, come back after an hour.");
}

//Function to handle button click
function clickHandler()
{
    fetch(translateURL(textinput.value))
    .then(response => response.json())
    .then(translatedJson =>{
        var newJson = translatedJson.contents.translated;
        outputtext.innerText = newJson;
    })
    .catch(errorHandler)
}

translatebutton.addEventListener("click", clickHandler);