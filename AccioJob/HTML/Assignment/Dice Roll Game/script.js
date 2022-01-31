const submit = document.getElementById("submit");
const playerCountEl = document.getElementById("playerCount");
const gridSizeEl = document.getElementById("gridSize");

submit.addEventListener("click", () => {
  const numPlayers = playerCountEl.value;
  const gridSize = gridSizeEl.value;

  let playerStats = [];

  for (let i = 1; i <= numPlayers; i++) {
    playerStats.push({
      id: i,
      reach: 0,
      rolls: [],
      path: [0],
    });
  }

  let maxReach = 0;
  let maxReachId = -1;

  while (maxReach < gridSize * gridSize) {
    for (let i = 0; i < numPlayers; i++) {
      const currRoll = getRandomRoll();
      playerStats[i].rolls.push(currRoll);

      if (playerStats[i].reach === 0 && currRoll !== 1 && currRoll !== 6) {
        playerStats[i].path.push(0);
      } else {
        const newReach = playerStats[i].reach + currRoll;

        if (newReach <= gridSize * gridSize) {
          playerStats[i].reach = newReach;
          playerStats[i].path.push(newReach);

          if (newReach > maxReach) {
            maxReach = newReach;
            maxReachId = playerStats[i].id;
          }
          if (maxReach > gridSize * gridSize) {
            break;
          }
        } else {
          playerStats[i].path.push(playerStats[i].reach);
        }
      }
    }
  }
  console.log(playerStats);
  createGameCard(playerStats, maxReachId, numPlayers);
});

function createGameCard(playerStats, maxReachId, numPlayers) {
  const tableBody = document.getElementById("card-body");
  tableBody.innerHTML = "";

  for (let i = 0; i < numPlayers; i++) {
    const tr = document.createElement("tr");

    const tdId = document.createElement("td");
    const tdDiceRoll = document.createElement("td");
    const tdDiceRollHistory = document.createElement("td");
    const tdPositionHistory = document.createElement("td");
    const tdWinnerStatus = document.createElement("td");

    tdId.innerHTML = playerStats[i].id;

    const lastIndexDiceRoll = playerStats[i].rolls.length - 1;
    if (lastIndexDiceRoll >= 0) {
      tdDiceRoll.innerHTML = playerStats[i].rolls[lastIndexDiceRoll];
    }

    tdDiceRollHistory.innerText = playerStats[i].rolls.toString();
    tdPositionHistory.innerText = playerStats[i].path.toString();

    if (playerStats[i].id === maxReachId) {
      tdWinnerStatus.innerHTML = "Winner";
    } else {
      tdWinnerStatus.innerHTML = "";
    }

    tr.appendChild(tdId);
    tr.appendChild(tdDiceRoll);
    tr.appendChild(tdDiceRollHistory);
    tr.appendChild(tdPositionHistory);
    tr.appendChild(tdWinnerStatus);

    tableBody.appendChild(tr);
  }
}

function getRandomRoll() {
  return Math.floor(Math.random() * 6 + 1);
}
