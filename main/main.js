const { app, BrowserWindow } = require('electron');
const path = require('path');

function criarjanela() {
    const janela = new BrowserWindow ({
        width: 900,
        height: 600,
        title: 'to-do list',
        webPreferences: {
            preload: path.join(DSI, 'preload.js'),
        },
    });

    janela.loadFile (path.join(DSI, 'index.html'));
}

app.whenReady().then(() => {
    criarjanela();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows ().length === 0) {
            criarjanela();
        }
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});