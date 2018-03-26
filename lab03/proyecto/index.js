var param_replacer = require('./lib/replace.js');

var objetivo = "%hello% %world%! -- %world% %hello%! ";
var idioma = "es";
var reemplazos = {
	"en": {
		"hello": "Hello",
		"world": "World"
	},
	"es": {
		"hello": "Hola",
		"world": "Mundo"
	}

};

var resultado = param_replacer.replace(objetivo, reemplazos[idioma]);
 console.log(resultado);