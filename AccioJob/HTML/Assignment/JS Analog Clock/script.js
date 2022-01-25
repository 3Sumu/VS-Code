const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setTime() {
  let now = new Date();
  let seconds = now.getSeconds();
  let minutes = now.getMinutes();
  let hours = now.getHours();

  const secDeg = seconds * 6 + 90;
  secondHand.style.transform = `rotate(${secDeg}deg)`;
  const minDeg = minutes * 6 + 90;
  minuteHand.style.transform = `rotate(${minDeg}deg)`;
  const hourDeg = hours * 30 + 90;
  hourHand.style.transform = `rotate(${hourDeg}deg)`;
}
setInterval(setTime, 10);
// setTime();
