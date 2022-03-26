const submit = document.getElementById("submit");
const details = document.querySelector(".details");
const message = document.querySelector(".message");
const game = document.querySelector(".game");

let player1 = "";
let player2 = "";
let playGame = true;
let activePlayer = 0;

submit.addEventListener("click", initializeGame);

function initializeGame() {
  player1 = document.getElementById("player1").value;
  player2 = document.getElementById("player2").value;

  activePlayer = 0;

  details.style.display = "none";
  game.style.display = "flex";

  showMessage(`${activePlayer === 0 ? player1 : player2}, you are up`);

  for (let i = 1; i <= 9; i++) {
    const div = document.createElement("div");
    div.id = i;
    div.classList.add("game-slot");

    div.addEventListener("click", function () {
      if (!div.innerText && playGame) {
        div.innerText = activePlayer === 0 ? "x" : "o";
        let winnerBool = checkWinner();
        if (!winnerBool) {
          updateActivePlayer();
          showMessage(`${activePlayer === 0 ? player1 : player2}, you are up`);
        } else {
          showMessage(
            `${activePlayer === 0 ? player1 : player2}, Congrats you won🎊`
          );
          setTimeout(() => {
            location.reload();
          }, 4000);
        }
      } else {
        showMessage(`Match Draw!`);
        setTimeout(() => {
          location.reload();
        }, 4000);
      }
    });
    game.appendChild(div);
  }
}

function showMessage(msg) {
  message.innerHTML = `<h3>${msg}</h3>`;
}

winningSequences = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// function blankSpaceLeft() {
//   for (let i = 1; i <= 9; i++) {
//     const blankOrNOt = document.getElementById(i).innerText;
//     const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1];
//     if (blankOrNOt !== "") {
//       arr.pop();
//       console.log(arr.length);
//       // setTimeout(() => {
//       //   location.reload();
//       // }, 4000);
//     }
//     if (arr.length === 0) console.log("match draw");
//   }
// }

function checkWinner() {
  let winnerBool = false;

  for (let i = 0; i < winningSequences.length; i++) {
    const winnerCombo = winningSequences[i];

    const cell1 = document.getElementById(winnerCombo[0] + 1);
    const cell2 = document.getElementById(winnerCombo[1] + 1);
    const cell3 = document.getElementById(winnerCombo[2] + 1);

    const val1 = cell1.innerText;
    const val2 = cell2.innerText;
    const val3 = cell3.innerText;

    if (val1 === val2 && val1 === val3 && val1 != "") {
      winnerBool = true;
      playGame = false;
      cell1.style.backgroundColor = "green";
      cell2.style.backgroundColor = "green";
      cell3.style.backgroundColor = "green";
      break;
    }
  }

  return winnerBool;
}

function updateActivePlayer() {
  if (activePlayer === 0) activePlayer = 1;
  else activePlayer = 0;
}
