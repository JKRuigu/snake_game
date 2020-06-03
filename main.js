const {app, BrowserWindow,ipcMain} = require('electron');
const { autoUpdater } = require('electron-updater');
const path = require('path');
const url = require('url');
let mainWindow;

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 750,
    height: 610,
    icon:__dirname+'/assets/icons/win/icon.ico',
    // solves the require module issue;
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, 'preload.js')
  }
  });
  mainWindow.setMenuBarVisibility(false)

  // mainWindow.loadFile(url.format({
  //   pathname:path.join(__dirname,'index2.html'),
  //   protocol:'file',
  //   slashes:true
  // }));
  mainWindow.loadFile('index.html');
  //devtools
  // mainWindow.webContents.openDevTools();

  mainWindow.on('closed',()=>{
    mainWindow = null;
  })

  mainWindow.once('ready-to-show', () => {
    autoUpdater.checkForUpdatesAndNotify();
  });  
}

app.on('ready',createWindow);



//quit
app.on('window-all-closed',() =>{
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

ipcMain.on('app_version', (event) => {
  event.sender.send('app_version', { version: app.getVersion() });
});

autoUpdater.on('update-available', () => {
  mainWindow.webContents.send('update_available');
});autoUpdater.on('update-downloaded', () => {
  mainWindow.webContents.send('update_downloaded');
});

ipcMain.on('restart_app', () => {
  autoUpdater.quitAndInstall();
});