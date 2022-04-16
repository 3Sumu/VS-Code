const menuBar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const cross = document.getElementById("cross");

if (menuBar) {
  menuBar.addEventListener("click", () => {
    nav.classList.add("active");
    cross.style.display = "flex";
  });
}

cross.addEventListener("click", () => {
  nav.classList.remove("active");
  cross.style.display = "none";
});
