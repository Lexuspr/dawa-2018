var http = require('http'),
	fs = require('fs'),
	formato = require('./fecha.js'),
	url = require('url'),	
	datos_fecha = formato.fecha,
	dias_faltantes = formato.diasfaltantes,
	url_data = [];

http.createServer(function(req, res){
	fs.readFile('./form1.html', function(err,html){
		var html_string = html.toString();

		if (req.url.indexOf('?')>0) {
			url_data = req.url.split('?');
			console.log(url_data[1]);

		}		
			
		var param_data = url_data[1].split('='),

		fecha_entrada = param_data[1];
		console.log(param_data);
		console.log(fecha_entrada);
		

		var respuesta = datos_fecha(req),
			fecha = respuesta['arreglo'];
		if (fecha[0] > 11) {
			if (fecha[0]=12) {
				html_string = html_string.replace('{hrs}', fecha[0]);
			}
			var dia_pm = fecha[0] - 12;
			html_string = html_string.replace('{formato}','pm');
			html_string = html_string.replace('{hrs}', dia_pm);
		} else			
			html_string = html_string.replace('{formato}','am');
			html_string = html_string.replace('{hrs}', fecha[0]);			
		

		html_string = html_string.replace(/{horas}/g, fecha[0]);
		html_string = html_string.replace(/{min}/g, fecha[1]);
		html_string = html_string.replace(/{seg}/g, fecha[2]);
		html_string = html_string.replace('{total}',dias_faltantes(fecha_entrada));
		console.log(dias_faltantes(fecha_entrada));
		res.writeHead(200,{'Content-type':'text'});
		res.write(html_string);
		res.end();		
	});
}).listen(8080);

