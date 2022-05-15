const input = document.getElementById("text");
const button = document.getElementById("btn");

console.log("hellow");

//button.addEventListener("click", add);

function add() {
  const text = input.value;
  console.log(text);
  const div = document.createElement("div");
  div.classList.add("item");
  div.innerText = text;
  document.querySelector(".list").append(div);
}
