// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process unless
// nodeIntegration is set to true in webPreferences.
// Use preload.js to selectively enable features
import { app } from "electron";

const setTitleButton = document.getElementById('setTitleButton');
const inputTitle = document.getElementById('inputTitle');
const welcome = document.getElementById('welcome');

setTitleButton.addEventListener("click", function(){
    // const title = inputTitle.value;
    mainWindow.electronAPI.setTitle("sdfa");


})

