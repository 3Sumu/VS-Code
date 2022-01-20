let buttons = Array.from(document.querySelectorAll(".btn"));
//console.log(buttons);

buttons.forEach((song) => playSound(song));

function playSound(songName) {
  console.log("playsound");
  songName.addEventListener("click", () => {
    stopSound();
    document.getElementById(songName.innerText).play();
  });
}

function stopSound() {
  buttons.forEach((song) => {
    console.log("Stopsound");
    document.getElementById(song.innerText).pause();
    document.getElementById(song.innerText).currentTime = 0;
  });
}

document.querySelector(".stop").addEventListener("click", () => stopSound());
