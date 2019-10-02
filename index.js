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
        win.webContents.print({silent:true,deviceName:''})
        setTimeout(function(){
          win.close();
        }, 3000);
    })
  })
}
