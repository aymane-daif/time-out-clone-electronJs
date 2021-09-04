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

let secondsRemaining = TOTAL_SECONDS;
let i = 0;
let remainder = setInterval(() => {
  let width = (100 / TOTAL_SECONDS) * i;
  if (secondsRemaining === -1 && i === TOTAL_SECONDS + 1) {
    clearInterval(remainder);
    window.postMessage('hide');
  }
  barDone.style.width = `${width}%`;
  totalSecEl.innerHTML = `${i} seconds`;
  remainingSecEl.innerHTML = `-${secondsRemaining} seconds`;
  i++;
  secondsRemaining--;
}, 1000);
