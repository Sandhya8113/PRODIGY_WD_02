let [hours, minutes, seconds] = [0, 0, 0];
let timerDisplay = document.getElementById("display");
let timer = null;
let laps = document.getElementById("laps");

function updateDisplay() {
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  timerDisplay.textContent = `${h}:${m}:${s}`;
}

function stopwatch() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  updateDisplay();
}

document.getElementById("start").onclick = () => {
  if (timer !== null) return;
  timer = setInterval(stopwatch, 1000);
};

document.getElementById("pause").onclick = () => {
  clearInterval(timer);
  timer = null;
};

document.getElementById("reset").onclick = () => {
  clearInterval(timer);
  [hours, minutes, seconds] = [0, 0, 0];
  timer = null;
  updateDisplay();
  laps.innerHTML = '';
};

document.getElementById("lap").onclick = () => {
  if (timer !== null) {
    const lapTime = timerDisplay.textContent;
    const li = document.createElement("li");
    li.textContent = `Lap: ${lapTime}`;
    laps.appendChild(li);
  }
};
