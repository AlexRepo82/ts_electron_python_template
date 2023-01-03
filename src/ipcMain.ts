import { ipcMain, dialog } from "electron"

export function ipcMainLoader(){
  ipcMain.on('do-displayText', (event) => {
    console.debug("Hello, World");
  })

  ipcMain.on('do-sendString', (event, data) => {
    console.debug(data.greeting);
  })

  ipcMain.on('pop-up', (event, data) => {
    dialog.showMessageBox(data)
  })
}
