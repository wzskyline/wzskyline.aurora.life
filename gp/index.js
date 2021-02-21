'use strict'
import { app, BrowserWindow,protocol } from 'electron'

import electron from 'electron'
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}
let mainWindow,all ={};
const Menu = electron.Menu
const winURL = process.env.NODE_ENV === 'development'? `http://localhost:9080`: `file://${__dirname}/index.html`;
const ipcMain = require('electron').ipcMain;
const fs = require('fs');
const path = require('path');
const wzskyline = path.join(app.getPath('userData'),'electron-wzskyline.json')
let screen,size;
var request = require('request');
var iconv =  require('iconv-lite');
function mkdir(filePath) {
const arr=filePath.split('/');
let dir=arr[0];


for(let i=1;i<arr.length;i++){
if(!dirCache[dir]&&!fs.existsSync(dir)){
    dirCache[dir]=true;
    fs.mkdirSync(dir);
}
dir=dir+'/'+arr[i];
}
fs.writeFileSync(filePath, '{}');
}

function asyncFile(filePath,obj) {
    if (!fs.existsSync(filePath)) return mkdir(filePath);
    try{
      return obj ? fs.writeFileSync(filePath, JSON.stringify(obj)) : JSON.parse(fs.readFileSync(filePath));
    }catch(e){
      console.log(' asyncFile error : ', e );
    }
}

function createWindow () {
    let width = parseInt(size.width * 0.9)
    let height = parseInt(size.height * 0.9)
    Menu.setApplicationMenu(null)
    mainWindow = new BrowserWindow({ width: width,height: height, useContentSize: true, 
	webPreferences: {
        webSecurity: false,nodeIntegration: true,
    }
    })
    if(!app.isPackaged) mainWindow.webContents.openDevTools()
    mainWindow.loadURL(winURL)
    all = asyncFile(wzskyline);
    mainWindow.on('closed', () => { mainWindow = null;});
}
function getStock(event,arg){
	request({ encoding: null,
    url: arg.url}, function (error, response, body) {
     
     var all = iconv.decode(body,'GB18030').split(";");
     var tmp =[]
     all.map(e=>{
      if(!e.trim())return;
			var str=e.trim().replace('"','').replace('"','').replace('var hq_str_','')
			var arr = str.split(",") 
      if(arr.length<5)return;
			var obj = {
			  f12:arr[0].split("=")[0].replace(/[^0-9]/ig,""),
        f14:arr[0].split("=")[1],
        f2:arr[3],
        f15:arr[4],
        f16:arr[5],
				
        f5:arr[8],
        f6:arr[9],
         
        f17:arr[1],
        f18:arr[2],
        diff:eval(`${arr[4]}-${arr[5]}`).toFixed(2),
        f3:eval(`100*(${arr[3]}-${arr[2]})/${arr[2]}`).toFixed(2),
        f4:eval(`${arr[3]}-${arr[2]}`).toFixed(2),
       
			}
      tmp.push(obj)
     })
	   event.sender.send('reply', tmp )
	});
}
ipcMain.on('message',function(event, arg) {
  if(arg.title === 'open'){
    //  event.sender.send('reply', JSON.stringify(all) ==='{}'? {"hover":false,"list":[]}:all );
  }
  if(arg.title === 'getStock'){ 
    getStock(event,arg)
  }
  if(arg.title === 'save'){
    asyncFile(wzskyline,arg);
  }
});
 
app.on('ready', () => {
  screen = electron.screen; size = screen.getPrimaryDisplay().workAreaSize;
  createWindow();
});

app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit();});
app.on('activate', () => { if (mainWindow === null)  createWindow();});

/* single instance */
const gotTheLock = app.requestSingleInstanceLock()
  if (!gotTheLock) { 
    app.quit()
  } else {
  app.on('second-instance', (event, commandLine, workingDirectory) => {
    if (mainWindow) {
      mainWindow.show()
      if (mainWindow.isMinimized()) mainWindow.restore()
      mainWindow.focus()
    }
});
}
app.whenReady().then(()=>{
  protocol.registerFileProtocol('file',(request,callback)=>{
	console.log(request.url)  
    callback({path:path.normalize(`${request.url.substr(8)}`)})
  })
})