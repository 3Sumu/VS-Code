const message = document.querySelector(".message");
const button = document.querySelector("button");
const gameArea = document.querySelector(".gameArea");
const results = document.querySelector(".results");
const directions = document.querySelector(".directions");

let inPlay = false;
let count = 0;
let playArea = {};

showMessage("Click Start To Begin");

button.addEventListener("click", () => {
  inPlay = true;
  button.style.display = "none";
  directions.style.display = "none";
  results.innerHTML = "";
  count = 0;

  showMessage("Starting...");
  showBox();
});

function showBox() {
  playArea.timer = setTimeout(myBox, random(4000));
}

function showMessage(notification) {
  message.innerHTML = `<h3>${notification}</h3>`;
}

function random(number) {
  let val = Math.floor(Math.random() * number);
  return val;
}

function getColor() {
  function color() {
    let hex = random(225).toString(16);
    return hex.padStart(2, "0");
  }

  let colr = "#" + color() + color() + color();
  const excludeColor = "#87cefa";
  if (colr === excludeColor) colr = "#" + color() + color() + color();
  return colr;
}

function myBox() {
  let element = document.createElement("div");
  element.classList.add("box");

  element.style.top = random(getMeTheHeight()) + "px";
  element.style.left = random(getMeTheWidth()) + "px";
  element.style.backgroundColor = getColor();

  element.start = new Date().getTime();

  element.addEventListener("click", hit);

  playArea.tempTimer = setTimeout(
    () => hit({ target: { start: element.start } }),
    2000
  );

  gameArea.appendChild(element);
}

function hit(e) {
  let start = e.target.start;
  let end = new Date().getTime();
  let duration = (end - start) / 1000;

  if (playArea.tempTimer) clearTimeout(playArea.tempTimer);

  let maxDuration = 1.2;
  clearTimeout(playArea.timer);
  showMessage(`You took ${duration}sec to click`);

  if (duration > maxDuration) {
    gameArea.children[0].remove();

    results.innerHTML = `Too Slow! <span id="loser"> You Lost!</span>
       Your score was ${count}.<br> Click the start button to play again!`;

    resetGame();
  } else {
    gameArea.children[0].remove();

    playArea.timer = setTimeout(myBox, random(4000));
    count++;
    if (count === 15) {
      results.innerHTML = `You poped ${count}! <span id="winner"> You Won!</span>
          Click the start button to play again!`;
      resetGame();
    } else {
      results.innerHTML = `Score ${count} out of 15`;
    }
  }
}

function resetGame() {
  clearTimeout(playArea.timer);
  inPlay = false;
  button.style.display = "block";
}

function getMeTheHeight() {
  let maxHeight = gameArea.clientHeight;
  if (maxHeight <= 100) maxHeight += 200;
  else maxHeight -= 200;
  return maxHeight;
}

function getMeTheWidth() {
  let maxWidth = gameArea.clientWidth;
  if (maxWidth <= 100) maxWidth += 200;
  else maxWidth -= 200;
  return maxWidth;
}
