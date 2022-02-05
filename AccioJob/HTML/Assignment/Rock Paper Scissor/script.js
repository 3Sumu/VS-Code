const cScore = document.getElementById("computerScore");
const pScore = document.getElementById("playerScore");
const compSelect = document.getElementById("computerSelect");
const playerSelect = document.getElementById("playerSelect");

const submit = document.getElementById("submit");
const message = document.getElementById("message");

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const start = document.getElementById("start");
const boards = document.getElementById("boards");
const select = document.getElementById("select");

let playerScore = 0;
let computerScore = 0;
let gameActive = false;

submit.addEventListener("click", displayBoards);

function displayBoards() {
  start.style.display = "none";
  boards.style.display = "block";
  select.style.display = "block";

  gameActive = true;
}

rock.addEventListener("click", () => gameFlow(rock.id));
paper.addEventListener("click", () => gameFlow(paper.id));
scissors.addEventListener("click", () => gameFlow(scissors.id));

function gameFlow(playerSelection) {
  const winnerObject = getMeWinner(playerSelection);
  let result = winnerObject.winner;
  let computerMove = winnerObject.compMove;
  console.log(playerSelection);
  console.log(winnerObject);

  displaySelection("player", playerSelection, result);
  displaySelection("computer", computerMove, result);

  scoreCard(result);
  message.innerText = result;

  whoWon();
}

function getMeWinner(playerSelection) {
  let computerSelection = computerPlay();
  let winner = playRound(playerSelection, computerSelection);
  winner =
    winner === 0 ? "Draw!" : winner === 1 ? "Player Won!" : "Computer Won!";

  return { winner: winner, compMove: computerSelection };
}

function computerPlay() {
  let arr = ["rock", "paper", "scissors"];

  let random = arr[Math.floor(Math.random() * arr.length)];

  return random;
}

function playRound(ps, cs) {
  // return 0 if it's a draw, return 1 if player won, and return -1 if computer won
  if (ps === cs) return 0;
  else if (ps === "rock" && cs === "paper") return -1;
  else if (ps === "rock" && cs === "scissors") return 1;
  else if (ps === "paper" && cs === "rock") return 1;
  else if (ps === "paper" && cs === "scissors") return -1;
  else if (ps === "scissors" && cs === "rock") return -1;
  else if (ps === "scissors" && cs === "paper") return 1;
}

function displaySelection(whoIsPlaying, selection, result) {
  if (whoIsPlaying === "player") {
    playerSelect.innerHTML = `<i class='fas fa-hand-${selection}'></i>`;

    if (result === "Player Won!") {
      playerSelect.style.color = "green";
      compSelect.style.color = "red";
    }
  } else {
    compSelect.innerHTML = `<i class='fas fa-hand-${selection}'></i>`;

    if (result === "Computer Won!") {
      compSelect.style.color = "green";
      playerSelect.style.color = "red";
    }
  }
  if (result === "Draw!") {
    compSelect.style.color = "";
    playerSelect.style.color = "";
  }
}

function scoreCard(result) {
  if (result === "Player Won!") {
    playerScore++;
    pScore.innerText = playerScore;
    cScore.innerText = computerScore;
  } else if (result === "Computer Won!") {
    computerScore++;
    pScore.innerText = playerScore;
    cScore.innerText = computerScore;
  } else {
    return false;
  }
}

function whoWon() {
  if (gameFinished()) {
    if (playerScore === 5)
      message.innerText = "Player is the winner! Congrats😁";
    else message.innerText = "Computer is the winner! You lose😥";
    reset();
  }
}

function gameFinished() {
  if (playerScore === 5 || computerScore === 5) return true;
  else return false;
}

function reset() {
  playerScore = 0;
  computerScore = 0;
  playerSelect.innerHTML = "";
  compSelect.innerHTML = "";
  pScore.innerText = "";
  cScore.innerText = "";
  gameActive = false;
  setTimeout(() => {
    message.innerText = "Choose rock, paper, or scissors to play again";
  }, 5000);
}
