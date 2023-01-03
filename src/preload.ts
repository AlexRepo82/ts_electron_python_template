// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.

import { contextBridge, ipcRenderer } from "electron";

// ipcMain APIs
contextBridge.exposeInMainWorld(
  'electronAPI', 
  {
    displayText,
    sendString,
    popupMessageBox,
  }
)

function displayText() {
  ipcRenderer.send('do-displayText');
}

function sendString(message: string) {
  ipcRenderer.send('do-sendString', {greeting: message})
}

function popupMessageBox(message: string) {
  ipcRenderer.send('pop-up', {message});
}


// ipcRenderer
ipcRenderer.on('eventFromMain', (event, message) => {
  var text = document.getElementById('welcome');
  text.innerText = message; 
});