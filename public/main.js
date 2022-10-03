const { app, BrowserWindow, remote } = require("electron");
const path = require("path");
const isDev = require("electron-is-dev");

// Create main window
function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {},
  });

  // Load right url
  win.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );
}

function createAnotherWindow() {
  const BrowserWindow = remote.BrowserWindow;
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  win.loadFile(path.join(__dirname, "test.html"));
}

// Start main window on startup
app.on("ready", createWindow);
// app.on("ready", createAnotherWindow);

// If on mac, dont close app, only minimase like apple do
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
