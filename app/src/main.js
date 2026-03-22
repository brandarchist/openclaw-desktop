const { app, BrowserWindow, ipcMain, Menu } = require("electron");
const path = require("path");
const { createApplicationMenu } = require("./menu/application-menu");

function createMainWindow() {
  const mainWindow = new BrowserWindow({
    width: 1180,
    height: 760,
    minWidth: 900,
    minHeight: 580,
    backgroundColor: "#12151d",
    title: "OpenClaw Desktop",
    webPreferences: {
      contextIsolation: true,
      sandbox: false,
      preload: path.join(__dirname, "preload.js")
    }
  });

  mainWindow.loadFile(path.join(__dirname, "ui", "index.html"));
  return mainWindow;
}

app.whenReady().then(() => {
  const mainWindow = createMainWindow();
  Menu.setApplicationMenu(createApplicationMenu(app));

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createMainWindow();
      return;
    }

    mainWindow.focus();
  });
});

ipcMain.on("app:quit", () => {
  app.quit();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
