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
const guessedLetters = [];


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
    //empty message paragraph
    message.innerText = "",
    //input entered
    const guess = guessTextInput.value;
    //single letter
    const correctGuess = validateInput(guess);
    if(correctGuess){
    //letter received, lets guess
    makeGuess(guess);
    };
    guessTextInput.value = "";
};
   

//== Create a Function to Check Player’s Input

const inputValue = function(input){
    const acceptedLetter = /[a-zA-Z]/
    //empty input
    if(input.length === 0){
       message.innerText = "Enter one letter";
    //more than 1 letter
    } else if (input.length > 1){
        message.innerText = "Only enter one letter";
    //not a letter
    } else if (!input.match(acceptedLetter)){
        message.innerText = "Enter a letter from A - Z only";
    //single letter
    } else {
        return input;
    }
};

//==Create a Function to Capture Input
const makeGuess = function(guess){
    guess = guess.toUpperCase();
    if (guessedLetters.includes(guess)) {
        message.innerText = "Already guessed. Try again.";
      } else {
        guessedLetters.push(guess);
        console.log(guessedLetters);
        showGuessedLetters();
        updateWordInProgress(guessedLetters);
      }
    };
   
//==Create a Function to Show the Guessed Letters
    
const pageLetterUpdate = function (){
    guessUl.innerHTML = "";
    for (const letter of guessedLetters) {
        const li = document.createElement("li");
        li.innerText = letter;
        pageLetterUpdate.append(li);
      }
};

//==Create a Function to Update the Word in Progress

const wordInProgressUpdate = function (guessedLetters){
    const wordUpper = word.toUpperCase();
    const wordArray = wordUpper.split("");
    const revealWord = [];
    for (const letter of wordArray) {
      if (guessedLetters.includes(letter)) {
        revealWord.push(letter.toUpperCase());
      } else {
        revealWord.push("●");
      }
    }


    // console.log(revealWord);
    wordInProgress.innerText = revealWord.join("");
    checkIfWin();
  };
  
//==Create a Function to Check If the Player Won

const hasPlayerWon = function (){
if (word.toUpperCase() === wordInProgress.innerText) {
    message.classList.add("win");
    message.innerHTML = `<p class="highlight">You guessed the correct word! Congrats!</p>`;
    }
};
















