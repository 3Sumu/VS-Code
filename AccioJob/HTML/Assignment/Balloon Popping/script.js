const container = document.querySelector(".balloon-container");

let popped = 0;
let numBalloons = 30;

for (let i = 1; i <= numBalloons; i++) {
  const dvEl = document.createElement("div");
  dvEl.classList.add("balloon");
  dvEl.innerText = "POP!";
  const randColor = getcolor();
  dvEl.style.backgroundColor = `${randColor}`;
  dvEl.style.color = `${randColor}`;
  console.log("pop");

  dvEl.addEventListener("mouseenter", () => {
    if (dvEl.style.backgroundColor !== "transparent") popped++;
    dvEl.style.backgroundColor = "transparent";
    checkAllPopped();
  });
  container.appendChild(dvEl);
}

function checkAllPopped() {
  if (popped === 30) {
    let msg = document.querySelector(".zero-balloon");
    msg.style.display = "block";
    container.innerHTML = "";
  }
}

function getcolor() {
  function color() {
    let hex = random(255).toString(16);
    return hex.padStart(2, "0");
  }
  return "#" + color() + color() + color();
}

function random(number) {
  let val = Math.floor(Math.random() * number);
  return val;
}
