const { app, BrowserWindow } = require("electron");
const wxHook = require("./plugins/wxHook");

let win, url;
if (process.env.NODE_ENV === "DEV") {
  url = "http://localhost:8080/";
} else {
  url = `file://${process.cwd()}/dist/index.html`;
}
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
