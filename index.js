//requiring electron in order to initialize the GUI
const { app, BrowserWindow } = require('electron');
//creating a new window, with height/width dimensions listed.
function createWindow () {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })
    //loading our index.html file to view
    win.loadFile('index.html');
}
//if there are no browser windows open, open one
app.whenReady().then(() => {
    createWindow();

    app.on('activate', function() {
        if(BrowserWindow.getAllWindows().length === 0) createWindow();
    })
})
//close app functionality
app.on('window-all-closed', function() {
    if(process.platform !== 'darwin') app.quit()
})