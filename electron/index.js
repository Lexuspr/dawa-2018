const path = require('path')
const glob = require('glob')

//Controla el ciclo de vida de la aplicacion
//Acceso al gestor de ventanas de Chromium
const {app, BrowserWindow, Menu} = require('electron')

// Referencia global a la ventana principal
var mainWindow = null;

//Terminamos el proceso de la aplicación cuando todas las ventanas se han cerrado
app.on('window-all-closed', function(){
	if (process.platform != 'darwin')
		app.quit();
});

let template =[{
	label: 'Menu Tecsup',
	submenu: [{
		label: 'Hola DAWA',
		accelerator: 'CmdOrCtrl+Z',
		role: 'undo'
	}, {
		type: 'separator'
	}, {
		label: 'View',
		submenu: [{
			label: 'Reload',
			accelerator: 'CmdOrCtrl+R',
			click: (item,focusedWindow) => {
				if (focusedWindow) {
					// on reload, start fresh and close any old
					// open secondary windows
					if (focusedWindow.id === 1){
						BrowserWindow.getAllWindows().forEach(win => {
							if (win.id > 1) win.close()
						})
					}
					focusedWindow.reload()
				}
			}
		}, {
			label: 'Toggle Full Screen',
			accelerator: (() => {
				if ( process.platform === 'darwin'){
					return 'Ctrl+Command+F'
				} else {
					return 'F11'
				}
			})(),
			click: (item, focusedWindow) => {
				if (focusedWindow) {
					focusedWindow.setFullScreen(!focusedWindow.isFullScreen())
				}
			}
		}, {
			type: 'separator'
		}, {
			label: 'Toggle Developer Tools',
			accelerator: (() => {
				if (process.platform === 'darwin') {
					return 'Alt+Command+I'
				} else {
					return 'Ctrl+Shift+I'
				}
			})(),
			click: (item, focusedWindow) => {
				if (focusedWindow) {
					focusedWindow.toggleDevTools()
				}
			}
		}]
	}]
}];
//Cuando todo se haya cargado, mediante el evento ready empezaremos a definir la aplicacion
app.on('ready', function() {
	const menu = Menu.buildFromTemplate(template)
	Menu.setApplicationMenu(menu)
	//Creamos una nueva ventana de 800x600
	mainWindow = new BrowserWindow({
		width: 800,
		height: 600
	});

	// Vinculamos el index.html a dicha ventana
	mainWindow.loadURL(`file://${__dirname}/index.html`);

	// Abrimos las opciones de desarrollo
	mainWindow.openDevTools();

	//Cuando la ventana principal se cierre...
	mainWindow.on('closed', function() {
		//Liberamos los recursos referentes a la ventana
		mainWindow = null;
	});
});