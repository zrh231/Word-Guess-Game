var randomWords = [
    bass = {name: "BASS"},
    pike = {name: "PIKE"},
    tuna = {name: "TUNA"},
    carp = {name: "CARP"},
    drum = {name: "DRUM"},
];

var GuessesRemaining = 3;
var guessedLetters = [];
var playerGuess = [];
var correctLetter =[];
var incorrectLetter =[];

//com picks random word
var randomPick = randomWords[Math.floor(Math.random() * randomWords.length)];


//generate _ for random word
"_".repeat(lengthofword) 


//player selects letter
document.onkeyup = function(event) {
    var playerGuess = event.key();


// com checks guess


//if correct then put letter in _ 
if (playerGuess == correctLetter) {

}


//if wrong then take away 1 guess
else if (playerGuess == incorrectLetter){
    
}


//if letter already used then do nothing
else if (playerguess == guessedletters){

}
else {
    
}



//if random word is spelled correctly the player won
if (randomWords === randomWords){
    alert("You Won!!");
}

//if total amount of guesses is used then the player lost
else if (guessesRemaining === 0){
    alert("You Lost!");
}
else {

}

//after player has won or lost then start a new game
if (randomWords === randomWords || guessesRemaining === 0){

}
