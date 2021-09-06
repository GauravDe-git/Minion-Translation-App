
var translatebutton = document.querySelector("#btn-translate");
var textinput = document.querySelector("#txt-input");
var outputtext = document.querySelector("#output");
var url = "https://api.funtranslations.com/translate/minion.json";

function urlEdit(input) {
    return url + "?" + "text=" + input;
}

translatebutton.addEventListener("click", () => {
    var response = (one) => one.json();
    var display = (two) => {
        var returned = two.contents.translated;
        outputtext.innerText = returned;
    };
    fetch(urlEdit(textinput.value))
        .then(response)
        .then(display)
        .catch((error) => {
            alert(
                "you have used the app for the fifth time, come after an hour."
            );
            return console.log("error came!!", error);
        });
});
