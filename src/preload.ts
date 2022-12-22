// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.

import { contextBridge, ipcRenderer } from "electron";

window.addEventListener("DOMContentLoaded", 
  function(){
    const replaceText = function (selector: string, text: string){
      const element = document.getElementById(selector);
      if (element) {
        element.innerText = text;
      }
    };

    replaceText("welcome", "Hello, World!");
  }
);

contextBridge.exposeInMainWorld("electronAPI", {
  setTitle: (title: any) => ipcRenderer.send('set-title', title)
});