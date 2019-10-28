const electron = require("electron");
const url = require("url");
import startServer from './server';

electron.app.on("ready", async () => {
    var mainWindow = new electron.BrowserWindow({});
    await startServer();
    console.log('Successful start server');
    mainWindow.loadURL('http://localhost:3030');
});