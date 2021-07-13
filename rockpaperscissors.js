function computerPlay() {
  let rps = ['rock', 'paper', 'scissors'];
  let ret = rps[Math.floor(Math.random() * rps.length)];

  return ret;
}

function playRound(pSelection, cSelection) {
  pSelection = pSelection.toLowerCase();
  let ret = '0';

  if (pSelection == 'rock' && cSelection == 'paper') {
    ret = 'You Lose! Paper beats Rock.';
  } else if (pSelection == 'rock' && cSelection == 'scissors') {
    ret = 'You Win! Rock beats Scissors.';
  } else if (pSelection == 'paper' && cSelection == 'rock') {
    ret = 'You Win! Paper beats Rock.';
  } else if (pSelection == 'paper' && cSelection == 'scissors') {
    ret = 'You Lose! Scissors beats Paper.';
  } else if (pSelection == 'scissors' && cSelection == 'rock') {
    ret = 'You Lose! Rock beats Scissors.';
  } else if (pSelection == 'scissors' && cSelection == 'paper') {
    ret = 'You Lose! Scissors beats Paper.';
  } else {
    //code when things are tied
    ret = 'Draw!';
  }

  return ret;
}

function playerPlay() {
  let ret = '0';

  ret = document.getElementById('rock')
    ? 'rock'
    : document.getElementById('paper')
    ? 'paper'
    : document.getElementById('scissors')
    ? 'scissors'
    : 'nothing was selected';

  return ret;
}

//this is YOUR MAIN FUNCTION
function game() {
  var playerScore = 0;
  var compScore = 0;
  var count = 0;

  //const pSelection = "rock";
  //const pSelection = prompt("Player, enter your choice (rock, paper, scissors): ");
  const cSelection = computerPlay();
  let ret = '0';

  return console.log(cSelection + ' eeeek');
}

game();

//console.log(playRound(pSelection, cSelection));
