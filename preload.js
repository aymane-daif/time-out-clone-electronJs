const FIFTEEN_MINUTES = 60000 * 15;
window.addEventListener('DOMContentLoaded', () => {
  let { ipcRenderer } = require('electron');
  let skipBtn = document.getElementById('skip');

  skipBtn.addEventListener('click', () => {
    ipcRenderer.send('break:skip');
  });

  window.onmessage = (e) => {
    ipcRenderer.send('app:hide');
  };
  setTimeout(() => {
    ipcRenderer.send('app:show');
    require('./renderer.js');
  }, FIFTEEN_MINUTES);
});
