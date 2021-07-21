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
var computerSelection = computerPlay();
var rock = document.getElementById('rock');
var paper = document.getElementById('paper');
var scissors = document.getElementById('scissors');

rock.addEventListener('click', function () {
  var playerSelection = 'rock';
  game(playerSelection);
});

paper.addEventListener('click', function () {
  var playerSelection = 'paper';
  game(playerSelection);
});

scissors.addEventListener('click', function () {
  var playerSelection = 'scissors';
  game(playerSelection);
});

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

  if (playerScore == 5) {
    document.getElementById('player-score').innerHTML = 'PLAYER WINS!';
    document.getElementById('player-score').style.fontSize = '40px';
    document.getElementById('comp-score').style.display = 'none';
  } else if (computerScore == 5) {
    document.getElementById('comp-score').innerHTML = 'COMPUTER WINS!';
    document.getElementById('comp-score').style.fontSize = '40px';
    document.getElementById('player-score').style.display = 'none';
  }

  console.log(
    `this is players score: ${playerScore} and this is computers score: ${computerScore}`
  );
}

function computerPlay() {
  let rps = ['rock', 'paper', 'scissors'];
  let ret = rps[Math.floor(Math.random() * rps.length)];

  return ret;
}

function game(playerSelection) {
  console.log('starting the game ....');

  //initialize variables
  //var computerSelection = computerPlay();
  var player = 'player-' + playerSelection,
    comp = 'comp-' + computerSelection; //used for changing html
  var winner = false;

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

function reset() {
  //clear screen first
  console.log(previousComputerMove + ' ' + previousPlayerMove);
  document.getElementById(previousPlayerMove).style.display = 'none'; //change whats in brackets
  document.getElementById(previousComputerMove).style.display = 'none';

  //reset scores
  document.getElementById('player-score').style.fontSize = '20px';
  document.getElementById('comp-score').style.fontSize = '20px';
  document.getElementById('player-score').style.display = 'inline';
  document.getElementById('player-score').innerHTML = 'Player: 0';
  document.getElementById('comp-score').style.display = 'inline';
  document.getElementById('comp-score').innerHTML = 'Computer: 0';

  //reset values
  previousPlayerMove = 'empty';
  previousComputerMove = 'empty';
  playerScore = 0;
  computerScore = 0;
}
