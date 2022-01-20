let disp = document.getElementById("display");
console.log(disp);

let button = document.getElementsByClassName("btn");
console.log("eload");

function isOp(op) {
  console.log("isop");
  if (op === "+" || op === "-" || op === "*" || op === "/") return true;
  return false;
}

function click(clicked) {
  console.log("click");
  if (disp.innerText === "") {
    if (clicked != "0") {
      disp.innerText = disp.innerText + clicked;
      console.log("disp.innerText");
    }
  } else {
    if (isOp(clicked) && isOp(disp.innerText[disp.innerText.length - 1])) {
      disp.innerText = disp.innerText + disp.innerText.slice(0, -1);
    }
    disp.innerText = disp.innerText + clicked;
  }
}

function evaluation() {
  console.log("evaluation");
  try {
    disp.innerText = eval(disp.innerText);
  } catch (err) {
    disp.innerText = "Error";
  }
}

function clear() {
  console.log("clear");
  disp.innerText = "";
}

function back() {
  console.log("back");
  disp.innerText = disp.innerText.slice(0, -1);
}
