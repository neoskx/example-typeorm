const electron = require("electron");
const url = require("url");

electron.app.on("ready", () => {
    var mainWindow = new electron.BrowserWindow({});
    require('./server/bin/www');

    setTimeout(() => {
        // mainWindow.loadURL(url.format({
        //     pathname: __dirname + "/index.html",
        //     protocol: "file:",
        //     slashes: true
        // }));
        // mainWindow.toggleDevTools();
        mainWindow.loadURL('http://localhost:3000');
    }, 2000);
});