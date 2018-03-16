const http = require('http');
const url = require('url');
const fs = require('fs');

const servidor=http.createServer((solicitud,respuesta)=>{
	const objURL = url.parse(solicitud.url);
	let ruta = '.'+objURL.pathname;
	console.log(ruta);
	if (ruta=='./') {
		ruta = './inicio.html';
	}
	console.log(ruta);
	fs.stat(ruta,error => {
		console.log(error);
		if(!error){
			fs.readFile(ruta,(error,contenido)=>{
				
				if(error){
					respuesta.write('Error interno');
					respuesta.end();
				} else {
					respuesta.write(contenido);
					respuesta.end();
				}
			});
			
		} else {
			respuesta.write(
				'Archivo no encontrado');
			respuesta.end();
		}
	});
	

});
servidor.listen(8080);