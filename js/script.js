// ==Global Variables

const guessUl = document.querySelector(".guessed-letters");         //1
const guessButton = document.querySelector(".guess");               //2
const guessTextInput = document.querySelector(".letter");           //3
const wordInProgress = document.querySelector(".word-in-progress"); //4
const guessRemaining = document.querySelector(".remaining");        //5
const guessDisplaySpan = document.querySelector(".remaining, span");//6
const messageParagraph = document.querySelector(".message");        //7
const hiddenPromptButton = document.querySelector(".play-again");   //8

const word = "magnolia";

//== Write a Function to Add Placeholders for Each Letter

const circleSymbol = function(word){
    const circleSymbolLetter = [];
    for(const letter of word){
        console.log(letter);
        circleSymbolLetter.push("●");
    };
    wordInProgress.innerText = circleSymbolLetter.join("");
};
circleSymbol(word);

//== Add an Event Listener for the Button

guessButton.addEventListener("click", function (e) {
    e.preventDefault();
    const whichLetter = guessTextInput.value;
    console.log(whichLetter);
    guessTextInput.value = "";
});




























