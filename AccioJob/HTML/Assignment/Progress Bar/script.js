const prev = document.getElementById("prev");
const next = document.getElementById("next");
const progress = document.getElementById("progress");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;
let numberOfCircles = circles.length;

next.addEventListener("click", () => {
  currentActive++;
  if (currentActive > numberOfCircles) currentActive = numberOfCircles;
  //   console.log(currentActive);
  updateCSS();
});

prev.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) currentActive = 1;
  //   console.log(currentActive);
  updateCSS();
});

function enableDisable() {
  if (currentActive === 1) prev.disabled = true;
  else if (currentActive === numberOfCircles) next.disabled = true;
  else {
    prev.disabled = false;
    next.disabled = false;
  }
}

function updateCSS() {
  for (let i = 0; i < numberOfCircles; i++) {
    const circle = circles[i];
    if (i < currentActive) circle.classList.add("active");
    else circle.classList.remove("active");
  }

  const activexyz = document.querySelectorAll(".active");
  //   console.log(
  //     ` active ${activexyz.length - 1} & circles ${circles.length - 1}`
  //   );
  const widthxyz = ((activexyz.length - 1) / (circles.length - 1)) * 100;
  //   console.log(widthxyz);
  progress.style.width = widthxyz + "%";
  enableDisable();
}
