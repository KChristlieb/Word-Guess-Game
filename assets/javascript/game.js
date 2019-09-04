//Initial Variables
var wins = 0;
var guessesRemaining = 12;
var gameFinished = false;

//Computer Choice Array:
var wordArray = ["BULBASAUR", "IVYSAUR", "VENUSAUR", "CHARMANDER", "CHARMELEON", "CHARIZARD", "SQUIRTLE", "WARTORTLE", "BLASTOISE", "ARTICUNO", "ZAPDOS", "MOLTRES", "MEWTWO", "MEW"];
var wordChoice = wordArray[Math.floor(Math.random() * wordArray.length)];
console.log(wordChoice);

var alreadyGuessed = [];

guessesRemainingFunction();

//keypress function to start things off
document.onkeypress = function (event) {
    var userGuess = event.key;
    userGuess = userGuess.toUpperCase();
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
    var alphabetArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
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

var audio2 = new Audio("./assets/audio/team-rocket.mp3");




//functions for a win, a loss, and/or a reset
function winnerFunction() {
    switch (wordChoice) {
        case "BULBASAUR":
            document.getElementById("pokemon").style.visibility = "hidden";
            document.getElementById("bulbasaur").style.visibility = "visible";
            document.getElementById("resultTextChange").innerHTML = "You caught a Bulbasaur!";
            audio1.play();
            audio1.volume = 0.05;
            break;
        case "IVYSAUR":
            document.getElementById("pokemon").style.visibility = "hidden";
            document.getElementById("ivysaur").style.visibility = "visible";
            document.getElementById("resultTextChange").innerHTML = "You caught a Ivysaur!";
            audio1.play();
            audio1.volume = 0.05;
            break;
        case "VENUSAUR":
            document.getElementById("pokemon").style.visibility = "hidden";
            document.getElementById("venusaur").style.visibility = "visible";
            document.getElementById("resultTextChange").innerHTML = "You caught a Vennusaur!";
            audio1.play();
            audio1.volume = 0.05;
            break;
        case "CHARMANDER":
            document.getElementById("pokemon").style.visibility = "hidden";
            document.getElementById("charmander").style.visibility = "visible";
            document.getElementById("resultTextChange").innerHTML = "You caught a Charmander!";
            audio1.play();
            audio1.volume = 0.05;
            break;
        case "CHARMELEON":
            document.getElementById("pokemon").style.visibility = "hidden";
            document.getElementById("charmeleon").style.visibility = "visible";
            document.getElementById("resultTextChange").innerHTML = "You caught a Charmeleon!";
            audio1.play();
            audio1.volume = 0.05;
            break;
        case "CHARIZARD":
            document.getElementById("pokemon").style.visibility = "hidden";
            document.getElementById("charizard").style.visibility = "visible";
            document.getElementById("resultTextChange").innerHTML = "You caught a Charizard!";
            audio1.volume = 0.05;
            audio1.play();
            break;
        case "SQUIRTLE":
            document.getElementById("pokemon").style.visibility = "hidden";
            document.getElementById("squirtle").style.visibility = "visible";
            document.getElementById("resultTextChange").innerHTML = "You caught a Squirtle!";
            audio1.play();
            audio1.volume = 0.05;
            break;
        case "WARTORTLE":
            document.getElementById("pokemon").style.visibility = "hidden";
            document.getElementById("wartortle").style.visibility = "visible";
            document.getElementById("resultTextChange").innerHTML = "You caught a Wartortle!";
            audio1.play();
            audio1.volume = 0.05;
            break;
        case "BLASTOISE":
            document.getElementById("pokemon").style.visibility = "hidden";
            document.getElementById("blastoise").style.visibility = "visible";
            document.getElementById("resultTextChange").innerHTML = "You caught a Blastoise!";
            audio1.play();
            audio1.volume = 0.05;
            break;
        case "ARTICUNO":
            document.getElementById("pokemon").style.visibility = "hidden";
            document.getElementById("articuno").style.visibility = "visible";
            document.getElementById("resultTextChange").innerHTML = "You caught a Articuno!";
            audio1.play();
            audio1.volume = 0.05;
            break;
        case "ZAPDOS":
            document.getElementById("pokemon").style.visibility = "hidden";
            document.getElementById("zapdos").style.visibility = "visible";
            document.getElementById("resultTextChange").innerHTML = "You caught a Zapdos!";
            audio1.play();
            audio1.volume = 0.05;
            break;
        case "MOLTRES":
            document.getElementById("pokemon").style.visibility = "hidden";
            document.getElementById("moltres").style.visibility = "visible"
            document.getElementById("resultTextChange").innerHTML = "You caught a Moltres!";
            audio1.play();
            audio1.volume = 0.05;
            break;
        case "MEWTWO":
            document.getElementById("pokemon").style.visibility = "hidden";
            document.getElementById("mewtwo").style.visibility = "visible";
            document.getElementById("resultTextChange").innerHTML = "MewTwo has caught you......";
            audio1.play();
            audio1.volume = 0.05;
            break;
        case "MEW":
            document.getElementById("pokemon").style.visibility = "hidden";
            document.getElementById("mew").style.visibility = "visible";
            document.getElementById("resultTextChange").innerHTML = "You caught Mew!";
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
        document.getElementById("pokemon").style.visibility = "hidden";
        document.getElementById("team_rocket").style.visibility = "visible";
        document.getElementById("resultTextChange").innerHTML = "You let team rocket get away!!!";
        audio2.play();
        audio2.volume = 0.05;
        gameFinished = true;
    }
}

function resetFunction() {
    document.getElementById("pokemon").style.visibility = "visible";
    document.getElementById("team_rocket").style.visibility = "hidden";
    document.getElementById("resultTextChange").innerHTML = "";
    document.getElementById("bulbasaur").style.visibility = "hidden";
    document.getElementById("ivysaur").style.visibility = "hidden";
    document.getElementById("venusaur").style.visibility = "hidden";
    document.getElementById("charmander").style.visibility = "hidden";
    document.getElementById("charmeleon").style.visibility = "hidden";
    document.getElementById("charizard").style.visibility = "hidden";
    document.getElementById("squirtle").style.visibility = "hidden";
    document.getElementById("wartortle").style.visibility = "hidden";
    document.getElementById("blastoise").style.visibility = "hidden";
    document.getElementById("articuno").style.visibility = "hidden";
    document.getElementById("zapdos").style.visibility = "hidden";
    document.getElementById("moltres").style.visibility = "hidden";
    document.getElementById("mewtwo").style.visibility = "hidden";
    document.getElementById("mew").style.visibility = "hidden";
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
}
