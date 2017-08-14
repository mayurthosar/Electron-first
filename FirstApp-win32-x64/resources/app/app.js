
const {app,BrowserWindow} = require('electron');
const path =require('path');
const url=require('url');

let win;
function createWindow(){

    //create broswer window
    win=new BrowserWindow({width:800,height:600});

    //load index.html
    win.loadURL(url.format({
        pathname:path.join(__dirname,'index.html'),
        protocol:'file',
        slashes:true
    }));

    //open devtools

    // win.webContents.openDevTools();
    // // noinspection JSAnnotator
    // win.on('closed', () =>{
    //     win = null
    // });
}

//run create window function

app.on('ready',createWindow);

exports.openWindow = (filename) => {
    let win=new BrowserWindow({width:800,height:600});
    win.loadURL(__dirname,filename + '.html')
}

//Quit when all windows are closed

app.on('window-all-closed',()=>{
    if(process.platform!=='darwin'){
        app.quit();
}
})