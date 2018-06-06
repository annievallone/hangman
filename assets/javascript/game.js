

document.readyState
// Defining the variables for generating words for the game 
//Dom elements 
var $invalidletters = document.getElementById(invalidletters)
var $wins = document.getElementById(wins)
var $losses = document.getElementById(losses)
var $answerArray = document.getElementById(answerArray)
//word array for the game 
var words = ["awkward", "bagpipes", "banjo", 'bungler', "croquet", 'crypt', 'cwarves', 'fervid', 'fishhook', 'fjord', 'gazebo', 'gypsy', 'haiku', 'haphazard', 'hyphen', 'ivory', 'jazzy', 'jiffy',
    'jinx', 'jukebox', 'kayak', 'kiosk', 'klutz', 'memento', 'mystify', 'numbskull', 'ostracize', 'oxygen', 'pajama', 'phlegm', 'pixel', 'polka', 'quad', 'quip', 'rhythmic', 'rogue', 'sphinx', 'squawk',
    'swivel', 'toady', 'twelfth', 'unzip', 'waxy', 'wildebeest', 'yacht', 'zealous', 'zigzag', 'zippy', 'zombie']
//Array for the computer generated puzzle word 
var puzzleWord = [];
//current game converted to a string 
var puzzString = [];
//array to store each of the users guesses
var guess = [];
// Defining an empty array to store the letters guessed that are in the word 
var validletters = [];
// Defining an empty array to store the letters guessed that are not in the word
var invalidletters = [];
//Array that holds my remaining letters to guess 
var remainingLetters = [];
//letter guessed by user
var letter = "";
//visible answer array 
var answerArray = [];
//wins losses
var wins = "";
var losses = "";

var index = "";

// When the Come in button is clicked randomly pick a word from the words array
//storing the work in puzzleWord then converting it to a string 
//sets wins and losses to 0
//creates blank placeholders for the word 
//verified working 
function newWord() {
    puzzleWord = words[Math.floor(Math.random() * words.length)];
    puzzString = puzzleWord.split("");
    wins = 0;
    losses = 0;
    remainingLetters = 6
    for (var i = 0; i < puzzleWord.length; i++) {
        answerArray[i] = "_";
        console.log(puzzString);
    }
};
// while (remainingLetters > 0) {  
//Gets the user pressed key and checks that it is a valid letter
//then stores it to the letter var and calls the guessCheck function 
//to check if the letter is in the word 
//verified working 
document.onkeyup = function userGuess(event) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        // var letter = event.key;
        guessCheck(event.key);
    }
};

//Gets the letter from the userGuess function and checks it against the 
//puzzString array to see if it matches any of the lettes 
//Need to add code to fetch the index of the letter that matches 
//

function guessCheck(letter) {
    var huh = false;
    for (var i = 0; i < puzzString.length; i++) {
        if (puzzString[i] === letter) {
    //create an object to store the value of i and the letter 
            var 
            validletters.push(letter);
            huh = true;
        } 
    }
    if (huh == false) {
        invalidletters.push(letter);
    // for (var i = 0; i < puzzString.length; i++) {
    //     if (puzzString[i] === letter) {
    //         invalidletters.push(letter);
    //     };
    }
    }

// else if (puzzString[i] !== letter) {
        //     invalidletters.push(letter);
        //     console.log("false");
        // }


   //  } closes my while there are still remaining letters array 

