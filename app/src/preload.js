const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("desktopShell", {
  quitApp: () => ipcRenderer.send("app:quit")
});
