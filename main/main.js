const { app, BrowserWindow } = require('electron');

function criarjanela() {
    const janela = new BrowserWindow ({
        width: 900,
        height: 600,
        title: 'to-do list'
    });

    janela.loadFile ('index.html');
}

app.whenReady().then(() => {
    criarjanela();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});