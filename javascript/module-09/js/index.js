"use strict";

const clockface = document.querySelector(".js-time");
const startBtn = document.querySelector(".js-start");
const lapBtn = document.querySelector(".js-take-lap");
const stopBtn = document.querySelector(".js-reset");

const timer = {
  startTime: null,
  deltaTime: null,
  pauseTime: null,
  id: null,
  isActiveStart: false,
  arrLaps: [],

  startTimer(callback) {
    if (!this.isActiveStart) {
      this.isActiveStart = true;
      disabledBtn(stopBtn, false);

      this.startTime = Date.now();

      this.id = setInterval(() => {
        const currentTime = Date.now();

        this.deltaTime = (currentTime + this.pauseTime) - this.startTime;

        startBtn.textContent = "Pause";

        callback(this.deltaTime);
      }, 100);
    } else {
      this.isActiveStart = false;
      this.pauseTime = this.deltaTime;
      clearInterval(this.id);
      startBtn.textContent = "Continue";
    }
  },

  stopTimer(callback) {
    this.deltaTime = 0;
    this.pauseTime = 0;
    this.isActiveStart = false;
    clearInterval(this.id);
    this.id = null;
    startBtn.textContent = "Start";
    disabledBtn(stopBtn, true);
    


    callback(this.deltaTime);
  },

  takeLap (callback) {
    this.arrLaps = [];
    this.arrLaps.push(this.deltaTime);
    callback(this.arrLaps)
  }
};



disabledBtn(stopBtn, true);

lapBtn.addEventListener("click", timer.takeLap.bind(timer,updateListLaps));

startBtn.addEventListener(
  "click",
  timer.startTimer.bind(timer, updateClockface)
);
stopBtn.addEventListener("click", timer.stopTimer.bind(timer, updateClockface));
stopBtn.addEventListener("click", timer.stopTimer.bind(timer, resetList));

function updateListLaps(arr) {
  const arrItems = [];
  for (let i = 0; i < arr.length; i++) {
    
    const item = document.createElement(`li`)
    item.textContent = getFormattedTime(arr[i])
    arrItems.push(item)
  };
  
  const laps = document.querySelector(`.js-laps`);
  laps.append(...arrItems);  
}

function resetList() {
  const laps = document.querySelector(`.js-laps`);
  laps.innerHTML = ``;
}




function updateClockface(time) {
  clockface.textContent = getFormattedTime(time);
}

function disabledBtn(elem, value) {
  elem.disabled = value;
}

function getFormattedTime(time) {
  let date = new Date(time);

  let min = date.getMinutes();
  if (min < 10) min = "0" + min;

  let sec = date.getSeconds();
  if (sec < 10) sec = "0" + sec;

  let ms = Number.parseInt(date.getMilliseconds() / 100);

  return `${min}:${sec}.${ms}`;
}


function setActiveBtn(target) {
  if (target.classList.contains("active")) {
    return;
  }

  startBtn.classList.remove("active");
  stopBtn.classList.remove("active");

  target.classList.add("active");
}
