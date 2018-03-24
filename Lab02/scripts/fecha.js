function fecha(req){

	var fecha = new Date();
	
	var hrs = fecha.getHours();
	var min = fecha.getMinutes();
	var seg = fecha.getSeconds();
	
	var fecha_arr = [hrs, min, seg];
	return {
		
		arreglo: fecha_arr		
	}
};
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

function diasfaltantes(fecha) {
    var num = '';
    var fecha_arr = [];
    var x = 0;
    for (i = 0; i < fecha.length; i++) {
        if (!isNaN(fecha.charAt(i)) && isNumeric(fecha.charAt(i))) {
            num += fecha.charAt(i);
        }
        else {
            fecha_arr[x] = parseInt(num, 10);
            x++;
            num = '';
        }
    }
    fecha_arr[x] = parseInt(num, 10);

    var fecha_calcular = new Date(fecha_arr[2], fecha_arr[1], fecha_arr[0]);
    var hoy = new Date();
    var dias_faltantes = Math.abs(fecha_calcular.getTime() - hoy.getTime());
    return Math.ceil(dias_faltantes / (1000*3600*24)) - 31;
};

module.exports.fecha = fecha;
module.exports.diasfaltantes = diasfaltantes;