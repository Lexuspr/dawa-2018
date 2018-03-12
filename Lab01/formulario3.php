<html>
<head>
	<title>Formulario JavaScript</title>
	<script type="text/javascript">
		var sumar = function(){
			var valor1 = parseFloat(document.getElementById('T1').value);
			var valor2 = parseFloat(document.getElementById('T2').value);
			document.getElementById('resultado').value = valor1 + valor2;
		}; 
	</script>
</head>
<body>
	<form>
		<p>Valor 1: <input type="text" id="T1" size="20"></p>
		<p>Valor 2: <input type="text" id="T2" size="20"></p>
		<p><input type="button" value="Sumar" onclick="sumar()"></p>
		<p>Resultado: <input type="text" id="resultado" disabled="disabled" /></p>
	</form>
</body>
</html>