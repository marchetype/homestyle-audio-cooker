//requiring electron in order to initialize the GUI
const { app, BrowserWindow } = require('electron');
//handlebars imports
const path = require('path');
const url = require('url');
const handlebars = require('handlebars');
//define a function that renders a view using Handlebars
function renderView(viewName, data) {
    //generate the file path of the view file
    const viewPath = path.join(__dirname, 'views', `${viewName}.hbs`);
    //read the contents of the view file
    const viewContent = fs.readFileSync(viewPath, 'utf8');
    //compile the view content into a function using Handlebars
    const template = handlebars.compile(viewContent);
    //use the compiled function to generate HTML code using the provided data
    const html = template(data);
    //load the generated HTML into the main Electron window
    mainWindow.loadURL(`data:text/html;charset=UTF-8,${encodeURIComponent(html)}`);
  }
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