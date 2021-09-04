const { app, BrowserWindow, ipcMain, screen } = require('electron');
const path = require('path');

let mainWindow;
function createWindow() {
  mainWindow = null;
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;

  mainWindow = new BrowserWindow({
    width: Number(`${width - 10}`),
    height: Number(`${height - 10}`),
    webPreferences: {
      nativeWindowOpen: true,
      preload: path.join(__dirname, 'preload.js'),
    },
    frame: false,
    resizable: false,
    transparent: true,
    show: false,
    backgroundColor: '#40000000',
  });

  mainWindow.loadFile('./index.html');

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });
}
app.whenReady().then(() => {
  createWindow();
  ipcMain.on('break:skip', () => mainWindow.hide());
  ipcMain.on('app:show', () => createWindow());
  ipcMain.on('app:hide', () => mainWindow.hide());
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});
