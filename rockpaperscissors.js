/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% 
By: Alejandra Perez
Date: Jul 12, 2021


NOTES:
functions that should be included:
  - playRound
  - computerPlay
  - game

variables that should be included:
  - pSelection
  - cSelection



%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */
var playerScore = 0,
  computerScore = 0;
var previousPlayerMove = 'empty';
var previousComputerMove = 'empty';

function playRound(pSelection, cSelection) {
  // ***** for this section maybe instead of string return a value so you can keep score

  if (pSelection == 'rock' && cSelection == 'paper') {
    console.log('You Lose! Paper beats rock!'); //delete this after
    computerScore++;
    document.getElementById(
      'comp-score'
    ).innerHTML = `Computer: ${computerScore}`;
  } else if (pSelection == 'rock' && cSelection == 'scissors') {
    console.log('You Win! Rock beats Scissors.'); //delete this after
    playerScore++;
    document.getElementById(
      'player-score'
    ).innerHTML = `Player: ${playerScore}`;
  } else if (pSelection == 'paper' && cSelection == 'rock') {
    console.log('You Win! Paper beats Rock.'); //delete this after
    playerScore++;
    document.getElementById(
      'player-score'
    ).innerHTML = `Player: ${playerScore}`;
  } else if (pSelection == 'paper' && cSelection == 'scissors') {
    console.log('You Lose! Scissors beats Paper.'); //delete this after
    computerScore++;
    document.getElementById(
      'comp-score'
    ).innerHTML = `Computer: ${computerScore}`;
  } else if (pSelection == 'scissors' && cSelection == 'rock') {
    console.log('You Lose! Rock beats Scissors.'); //delete this after
    computerScore++;
    document.getElementById(
      'comp-score'
    ).innerHTML = `Computer: ${computerScore}`;
  } else if (pSelection == 'scissors' && cSelection == 'paper') {
    console.log('You Lose! Scissors beats Paper.'); //delete this after
    computerScore++;
  } else {
    console.log('Draw!');
    score = 'draw';
  }
}

function computerPlay() {
  let rps = ['rock', 'paper', 'scissors'];
  let ret = rps[Math.floor(Math.random() * rps.length)];

  return ret;
}

function game(playerSelection) {
  console.log('starting the game ....');

  //initialize variables
  var computerSelection = computerPlay();
  var player = 'player-' + playerSelection,
    comp = 'comp-' + computerSelection; //used for changing html
  var winner = false;
  var firstGame = true;

  //check to see if there is a winner
  if (playerScore == 5 || computerScore == 5) {
    winner = true;
    console.log('GAME OVER!');
  } /*if (!winner)*/ else {
    if (previousPlayerMove !== 'empty') {
      console.log('this is not empty!');
      document.getElementById(previousPlayerMove).style.display = 'none';
      document.getElementById(previousComputerMove).style.display = 'none';
    }
    document.getElementById(player).style.display = 'inline';
    document.getElementById(comp).style.display = 'inline';
    playRound(playerSelection, computerSelection); //update the scores in this function
    previousPlayerMove = player;
    previousComputerMove = comp;
  }
}

function rps() {
  var rock = document.getElementById('rock');
  var paper = document.getElementById('paper');
  var scissors = document.getElementById('scissors');

  rock.onclick = function () {
    var playerSelection = 'rock';
    game(playerSelection);
  };

  paper.onclick = function () {
    var playerSelection = 'paper';
    game(playerSelection);
  };

  scissors.onclick = function () {
    var playerSelection = 'scissors';
    game(playerSelection);
  };
}
