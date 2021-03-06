let fish: HTMLElement = null;
let step: number = 50;
let timerID: any = 0;

document.addEventListener('DOMContentLoaded', function () {
  init();
  ininEvent();
});

function init() {
  fish = document.getElementById('fish');
  console.log('init');
}

function ininEvent() {
  let btnStart: HTMLElement = document.getElementById('btnStart');
  btnStart.addEventListener('click', function () {
    console.log('ininEvent');
    start();
  });
}

function start() {
  if (timerID == 0) {
    timerID = setInterval(function () {
      console.log('start');
      moveFish();
    }, 100);
  }
}

function stop() {
  clearInterval(timerID);
  timerID = 0;
  console.log('stop');
}

function moveFish() {
  let x: any = fish;

  x = {
    left: x.offsetLeft + step,
  };

  console.log(x);

  if (x >= 430) {
    fish.setAttribute('src', './images/fish2.png');
    step = -50;
  }
  if (x < 50) {
    fish.setAttribute('src', './images/fish1.png');
    step = 50;
  }
}
