var inquirer = requirer("inquirer");
var prompt = requirer("prompt");
// list of words
var wordList = ["this", "wasnt", "easy", "javascript", "macintosh"];
// letters guessed
var guessed = "";
// letters guessed
var displayletters = function(word, correctguess){
	this.word: word;
	this.correctguess:correctguess;
	this.displayletters : "";

	this.parseDisplay = function(){

    // Show the user the hangman word
    var shown = '';

    // If no goodGuesses yet then single For Loop
    \
    if(this.correctguess == undefined){
     for(var i = 0; i < this.word.length; i++){
        // If not the letter
        shown += ' _ ';
      }
    }
    // Otherwise, check all letters in a double loop
    else{

      // Double for loop... loop through the word itself and then each possible correct letter
      for(var i = 0; i < this.gameWord.length; i++){

        // To determine whether a _ is needed
        var letterWasFound = false;

        for(var j = 0; j < this.correctguess.length; j++){
          // If yes the letter
          if(this.gameWord[i] == this.correctguess[j]){
            shown += this.correctguess[j];
            letterWasFound = true;
          }
        }
        // If nothing was found
        if(!letterWasFound){
          shown += ' _ ';
        }
      }
    }
}

// start the game

function start(){
// variable for chances
}
// gameover
function gameover(){

}