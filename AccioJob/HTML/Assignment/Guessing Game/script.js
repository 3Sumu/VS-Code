const userInput = document.getElementById("guessField");
const submit = document.getElementById("subt");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

let previousGuesses = [];
let numGuesses = 0;

let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber);
let maxGuesses = 10;

submit.addEventListener("click", (e) => {
  e.preventDefault();
  const guess = parseInt(userInput.value);
  validateGuess(guess);
});

function validateGuess(guess) {
  previousGuesses.push(guess);
  if (previousGuesses.length === maxGuesses) {
    displayGuesses(guess);
    displayMsg(`Opps!Game Over... Number was ${randomNumber}`);
    endGame();
  } else {
    displayGuesses(guess);
    checkGuess(guess);
  }
}

function displayGuesses(guess) {
  guessSlot.innerHTML += `${guess} `;
  userInput.value = "";
  numGuesses++;
  let remainingGuesses = maxGuesses - numGuesses;
  if (remainingGuesses < 0) remainingGuesses = 0;
  remaining.innerHTML = remainingGuesses;
}

function displayMsg(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMsg("That's a Correct Guess!🎊Yaahooo🎊");
    endGame();
  } else if (guess > randomNumber) displayMsg("Too High! Try A Smaller Number");
  else displayMsg("Too Low! Try A Higher Number");
}

const p1 = document.createElement("p");

function endGame() {
  p1.classList.add("button");
  p1.style.cursor = "pointer";
  p1.innerHTML = `<h1 onclick="newGame()">Start New Game</h1>`;
  startOver.append(p1);

  submit.disabled = true;
  userInput.disabled = true;
}

function newGame() {
  location.reload();
}
