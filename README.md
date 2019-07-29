# yooga-electron-print

> Allows printing from an Electron App in silent mode using the default printer of the system.
> This is a fork of @electron-print
## Install

```
$ npm install --save yooga-electron-print
```

## Usage

```js
const printer = require('electron-print');

app.on('ready', function() {
    printer.print("Text sent to printer.")
});

```

## Version

1.0.3
