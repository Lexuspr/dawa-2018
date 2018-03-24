const http = require('http');
const url = require('url');
const fs = require('fs');
const op = require('./operaciones.js');


var fun_ope = op.operacion,
	datos = op.variables;


const servidor=http.createServer((solicitud,respuesta)=>{
	const objURL = url.parse(solicitud.url);
	let ruta = '.'+objURL.pathname;
	
	if (ruta=='./') {
		ruta = './inicio.html';
	}
	
	fs.stat(ruta,error => {
		
		if(!error){
			fs.readFile(ruta,(error,contenido)=>{
				
				if(error){
					respuesta.write('Error Interno');
					respuesta.end();
				} else {

					var html_string = contenido.toString(),

						valores = datos(solicitud),

						resultado = fun_ope(valores[0], valores[1], valores[2]);
					
					
					html_string = html_string.replace('{resultado}', resultado);
					if (valores[2] != 0) {
						html_string = html_string.replace(/display: none/g, '');
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