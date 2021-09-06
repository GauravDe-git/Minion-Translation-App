//Creating the variables

var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#textInput");
var textOutput = document.querySelector("#textOutput");

//the server url

var serverUrl = "https://api.funtranslations.com/translate/minion.json";

//Function to get the translation url

function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input
}

//Function to handle errors

function errorHandler(error) {
    console.log("error occured", error);
    alert("An error occured on the server! Try again later.")
}

//Handling the click event

function clickHandler()
{
    var inputText = textInput.value;

    //now calling the server

    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
    var translatedText = json.contents.translated;
    outputDiv.innerText = translatedText; // output
    })
    .catch(errorHandler)
}

btnTranslate.addEventListener("Click",clickHandler);
