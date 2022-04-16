const para = document.querySelector(".div");

const b4 = document.querySelector(".b4");
const b5 = document.querySelector(".b5");
const b6 = document.querySelector(".b6");
const b7 = document.querySelector(".b7");
const b8 = document.querySelector(".b8");
const b9 = document.querySelector(".b9");

function Font(size) {
  var ele = document.querySelector(".div");
  ele.style.fontSize = size;
}

b4.addEventListener("click", () => {
  para.style.color = "green";
});

b5.addEventListener("click", () => changeColor("red"));
b6.addEventListener("click", () => changeColor("blue"));

function changeColor(color) {
  para.style.color = color;
}

b7.addEventListener("click", () => changeFont("calibri"));
b8.addEventListener("click", () => changeFont("vardana"));
b9.addEventListener("click", () => changeFont("cambria"));

function changeFont(font) {
  para.style.fontFamily = font;
}
