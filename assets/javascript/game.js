//Initial Variables
var wins = 0;
var guessesRemaining = 12;
var gameFinished = false;

//Computer Choice Array:
var wordArray = ["bulbasaur", "ivysaur", "venusaur", "charmander", "charmeleon", "charizard", "squirtle", "wartortle", "blastoise", "articuno", "zapdos", "moltres", "mewtwo", "mew"];
var wordChoice = wordArray[Math.floor(Math.random() * wordArray.length)];
console.log(wordChoice);

var alreadyGuessed = [];

guessesRemainingFunction();

//keypress function to start things off
  document.onkeypress = function(event) {
    var userGuess = event.key;
    userGuess = userGuess.toLowerCase();
    wordCheck(userGuess);
    drawPlaySpace();
  };

//function for checking the guesses against words, includes what happens for a win or a loss as well as letter verify
function wordCheck(userGuess) {
  if (gameFinished === true) {
    resetFunction();
    return;
  }
  var isItLetter = false;
  var alphabetArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  for (i = 0; i < alphabetArray.length; i++) {
    if (userGuess === alphabetArray[i]) {
      isItLetter = true;
    }
  }
  if (isItLetter === false) {
    alert("For the right PokeBall, please select a letter.");
    return;
  }
  var doesItMatch = false;
    for (i = 0; i < wordChoice.length; i++) {
      if (userGuess === wordChoice[i]) {
        doesItMatch = true;
        playSpace[i] = userGuess;
      }
    }
    var didWeWin = true;
      for (i = 0; i < wordChoice.length; i++) {
        if (playSpace[i] != wordChoice[i]) {
          didWeWin = false;
        }
      }
      if (didWeWin === true) {
        winnerFunction();
        return;
      }
    for (i = 0; i < alreadyGuessed.length; i++) {
      if (userGuess === alreadyGuessed[i]) {
        return;
      }
    }
    if (!doesItMatch) {
     guessesRemaining--;
     guessesRemainingFunction();
     alreadyGuessed.push(userGuess);
     alreadyGuessedFunction();
   }
   if (guessesRemaining === 0) {
     loserFunction();
     return;
   }
  }

  function alreadyGuessedFunction() {
    document.getElementById("already-guessed").innerHTML = alreadyGuessed;
  }

  function guessesRemainingFunction() {
    document.getElementById("guesses-remaining").innerHTML = guessesRemaining;
  }

  document.getElementById("current-word").innerHTML = playSpace;

//functions for creating underscores and spaces between the underscores
function drawBlanks() {
  var underscoreArray = [];
  for (i = 0; i < wordChoice.length; i++) {
    underscoreArray.push("_");
  }
  return underscoreArray;
}

var playSpace = drawBlanks();

function drawPlaySpace() {
  for (i = 0; i < playSpace.length; i++) {
    document.getElementById("current-word").innerHTML = playSpace.join(" ");
  }
}

 drawPlaySpace();

//Audio Variables for Win/Lose/Reset functions
 var audio1 = new Audio("./assets/audio/Pokemon-Theme-Song.mp3");

 var audio2 = new Audio("./assets/music/yougotbeefsquatched.wav");




//functions for a win, a loss, and/or a reset
 function winnerFunction() {
   switch (wordChoice) {
     case "bulbasaur":
     document.getElementById("pokemon").style.visibility = "hidden";
     document.getElementById("bulbasaur").style.visibility = "visible";
     document.getElementById("resultTextChange").innerHTML = "Alriiiiight! It's Linda!";
     audio1.play();
     audio1.volume = 0.05;
     break;
     case "ivysaur":
     document.getElementById("pokemon").style.visibility = "hidden";
     document.getElementById("ivysaur").style.visibility = "visible";
     document.getElementById("resultTextChange").innerHTML = "THIS IS ME NOW! It's Beefsquatch!";
     audio1.play();
     audio1.volume = 0.05;
     break;
     case "fischoeder":
     document.getElementById("pokemon").style.visibility = "hidden";
     document.getElementById("fischoeder").style.visibility = "visible";
     document.getElementById("resultTextChange").innerHTML = "You can work in my coal mine! It's Calvin Fischoeder!";
     audio1.play();
     audio1.volume = 0.05;
     break;
     case "louise":
     document.getElementById("pokemon").style.visibility = "hidden";
     document.getElementById("louise").style.visibility = "visible";
     document.getElementById("resultTextChange").innerHTML = "Enough with Canada! It's Louise!";
     audio1.play();
     audio1.volume = 0.05;
     break;
     case "marshmallow":
     document.getElementById("pokemon").style.visibility = "hidden";
     document.getElementById("marshmallow").style.visibility = "visible";
     document.getElementById("resultTextChange").innerHTML = "If you show me a sweet potato pie, I am on top of it. It's Marshmallow!";
     audio1.play();
     audio1.volume = 0.05;
     break;
     case "frond":
     document.getElementById("pokemon").style.visibility = "hidden";
     document.getElementById("frond").style.visibility = "visible";
     document.getElementById("resultTextChange").innerHTML = "Don't throw Repressed Memory Emily! It's Mr. Frond!";
     audio1.volume = 0.05;
     audio1.play();
     break;
     case "mudflap":
     document.getElementById("pokemon").style.visibility = "hidden";
     document.getElementById("mudflap").style.visibility = "visible";
     document.getElementById("resultTextChange").innerHTML = "Oh, Mudflap? Uh that was my grandmother's name. It's Mudflap!";
     audio1.play();
     audio1.volume = 0.05;
     break;
   }
   wins++;
   winsFunction();
 }

 function winsFunction() {
   document.getElementById("total-wins").innerHTML = wins;
   gameFinished = true;
 }

 function loserFunction() {
   if (guessesRemaining === 0) {
    document.getElementById("bobFamily").style.visibility = "hidden";
    document.getElementById("tinaSad").style.visibility = "visible";
    document.getElementById("resultTextChange").innerHTML = "You Lost! Try again!";
    audio8.play();
    audio8.volume = 0.05;
    gameFinished = true;
    }
 }

 function resetFunction() {
   document.getElementById("bobFamily").style.visibility = "visible";
   document.getElementById("tinaSad").style.visibility = "hidden";
   document.getElementById("resultTextChange").innerHTML = "";
   document.getElementById("linda").style.visibility = "hidden";
   document.getElementById("beefsquatch").style.visibility = "hidden";
   document.getElementById("fischoeder").style.visibility = "hidden";
   document.getElementById("louise").style.visibility = "hidden";
   document.getElementById("marshmallow").style.visibility = "hidden";
   document.getElementById("frond").style.visibility = "hidden";
   document.getElementById("mudflap").style.visibility = "hidden";
   alreadyGuessed.length = 0;
   alreadyGuessedFunction();
   guessesRemaining = 12;
   guessesRemainingFunction();
   wordChoice = wordArray[Math.floor(Math.random() * wordArray.length)];
   console.log(wordChoice);
   playSpace = drawBlanks();
   gameFinished = false;
   audio1.pause();
   audio1.currentTime = 0;
   audio2.pause();
   audio2.currentTime = 0;
   audio3.pause();
   audio3.currentTime = 0;
   audio4.pause();
   audio4.currentTime = 0;
   audio5.pause();
   audio5.currentTime = 0;
   audio6.pause();
   audio6.currentTime = 0;
   audio7.pause();
   audio7.currentTime = 0;
   audio8.pause();
   audio8.currentTime = 0;
 }
