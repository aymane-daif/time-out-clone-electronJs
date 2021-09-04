const TOTAL_SECONDS = 15;

let imgContainer = document.getElementById('img-container');
let remainingSecEl = document.getElementById('remaining');
let totalSecEl = document.getElementById('total');
let barDone = document.querySelector('.bar-done');
let idx = Math.floor(Math.random() * 5);

let img = document.createElement('img');
img.src = `./assets/${idx}.jpg`;
img.setAttribute('alt', 'stretch');
imgContainer.appendChild(img);

totalSecEl.innerHTML = `${TOTAL_SECONDS} seconds`;
let secondsRemaining = TOTAL_SECONDS;

let remainder = setInterval(() => {
  let width = (100 / TOTAL_SECONDS) * (TOTAL_SECONDS - secondsRemaining);
  if (secondsRemaining === 0) {
    clearInterval(remainder);
    window.postMessage('hide');
  }
  barDone.style.width = `${width}%`;
  remainingSecEl.innerHTML = `${secondsRemaining} seconds`;
  secondsRemaining--;
}, 1000);
