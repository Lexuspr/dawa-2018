const http = require('http');
const url = require('url');
const fs = require('fs');
const op = require('./operaciones.js');


var datos = op.variables;
var procesar_txt= op.procesar;


const servidor=http.createServer((solicitud,respuesta)=>{
	const objURL = url.parse(solicitud.url);
	let ruta = '.'+objURL.pathname;
	
	if (ruta=='./') {
		ruta = './inicio1.html';
	}
	
	fs.stat(ruta,error => {
		
		if(!error){
			fs.readFile(ruta,(error,contenido)=>{
				
				if(error){
					respuesta.write('Error Interno');
					respuesta.end();
				} else {

					var html_string = contenido.toString(),

						valores = datos(solicitud);
						
						if (valores[0] != '') {
							
							if(valores[2] != '') {
								nuevo_texto = procesar_txt(valores[0],0,valores[2]);
							} else{
								nuevo_texto = procesar_txt(valores[0],valores[1], "");
							}
												
				
							html_string = html_string.replace('{nuevo_texto}', nuevo_texto);
							
							if (valores[0]!=0) {
								html_string = html_string.replace(/display: none/g, '');
							}
						}
						
					
					respuesta.write(html_string);
					respuesta.end();
				}
			});
			
		} else {
			respuesta.write(
				'<!doctype html><html><head></head><body>Recurso inexistente</body></html>');
			respuesta.end();
		}
	});
	

});
servidor.listen(8080);