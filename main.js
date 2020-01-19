const { app, BrowserWindow, ipcMain } = require("electron");
const wxHook = require("./plugins/wxHook");

let win, url;
if (process.env.NODE_ENV === "DEV") {
  url = "http://localhost:8080/";
} else {
  url = `file://${process.cwd()}/dist/index.html`;
}
global.sharedObject = {
  someProperty: "default value"
};
function createWindow() {
  win = new BrowserWindow({
    width: 1024,
    height: (6 / 9) * 1024,
    webPreferences: {
      nodeIntegration: true
    },
    minimizable: false,
    webSecurity: false
  });
  win.loadURL(url);
  win.webContents.openDevTools({ mode: "detach" });
  win.setPosition(0, 0, true);
  wxHook(win);
  win.on("closed", () => {
    win = null;
  });
}
app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (win === null) {
    createWindow();
  }
});

ipcMain.on("asynchronous-message", (event, arg) => {
  console.log("异步事件", arg);
  event.returnValue = event;
  event.sender.send("asynchronous-reply", "当前事件类型:async");
});

ipcMain.on("synchronous-message", (event, arg) => {
  console.log("同步事件", arg);
  if (arg.type === 2) {
    event.sender.send("asynchronous-reply", "当前事件类型:sync");
  }
  event.returnValue = "当前事件类型:sync"; // returnValue 即为返回值
});
