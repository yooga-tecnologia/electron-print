'use strict';
const electron = require('electron');
const BrowserWindow = electron.remote.BrowserWindow;
const fs = require('fs')
const path = require('path')

module.exports = {
  print : print
}

function print(text, nome_arquivo = "print.html"){
  let win = new BrowserWindow({show: false})
  fs.writeFile(path.join(__dirname,'../../../'+nome_arquivo), text, () => {
    win.loadURL('file://'+path.join(__dirname,'../../../'+nome_arquivo))
    win.webContents.on('did-finish-load', () => {
        win.webContents.print({silent:true,deviceName:''}, (res) => {
        
          setTimeout(() => {
            win.close();
          }, 3000);
        })
    })

    win.webContents.on('did-fail-load', () => {
      console.error("[yooga-electron-print] FAIL LOAD")
    }) 
  })
}
