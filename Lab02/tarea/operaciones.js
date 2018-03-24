function operacion(num1, num2, ope) {
	var param1 = parseInt(num1),
		param2 = parseInt(num2),
		ope_mat = ope,
		resultado = 0;
	
	if (!isNaN(param1) && !isNaN(param2)) {
		
		switch (ope_mat) {
			case "sumar":
				resultado = param1 + param2;
				break
			case "restar":
				resultado = param1 - param2;
				
				break
			case "multiplicar":
				
				resultado = param1 * param2;
				break
			case "dividir":
				if (param2 != 0) {
					resultado = param1 / param2;

				} else{
					resultado = "Error!!!! Division entre cero";
				}
				break	
		}

	} else {
		resultado = "Error!!!! Ingrese solo números";
	}
	
	return resultado;

		
}

function variables(req){

	var valores = [];

	if(req.url.indexOf('?')>0){
		var url_data = req.url.split('?');
		
		var arreglo_parametros = url_data[1].split('&');

		for (var i = 0 ; i < arreglo_parametros.length; i++) {
			var parametro = arreglo_parametros[i];
			var param_data = parametro.split('=');		
			valores[i] = param_data[1];
		
		}
	} else {
		valores = [0, 0, 0];
	}
	
	return	valores;
}

function procesar(txtArea, op, cad){
	var texto = txtArea.split('+').join(' '),		
		operacion = op,
		cadena = cad.split('+').join(' '),
		nuevo_texto = "";
			
	
	console.log(txtArea);
	switch (operacion) {

		case "minusculas":
			nuevo_texto = texto.toLowerCase();
			
			break
		case "mayusculas":
			nuevo_texto = texto.toUpperCase();
			break
		case "capitalizar":
			console.log(texto);
			nuevo_texto = texto.charAt(0).toUpperCase() + texto.slice(1);
			break
		case "espacios":
			nuevo_texto = texto.replace(/\s/g, '');;
			break
		default:
			console.log("Default");
			console.log(cadena);
			console.log(texto);
			var re = new RegExp(cadena,"g");
			nuevo_texto = texto.replace(re, '');
			console.log(nuevo_texto);
			/* */
			break
	}

	return nuevo_texto;

}

module.exports.operacion = operacion;
module.exports.variables = variables;
module.exports.procesar = procesar;