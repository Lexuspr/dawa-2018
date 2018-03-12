<?php
$suma = 0;
$valor1 = 0;
$valor2 = 0;
if(isset($_POST)){
	$valor1 = $_POST['T1'];
	$valor2 = $_POST['T2'];
	$suma = $valor1 + $valor2;

} 
 ?>

 <html>
 <head>
 	<title>Formulario PHP</title>
 </head>
 <body>
 	<form method="POST">
 		<p>Valor 1: <input type="text" id="T1" name="T1" size="20" value="<?php echo $valor1; ?>"></p>
		<p>Valor 2: <input type="text" id="T2" name="T2" size="20" value="<?php echo $valor2; ?>"></p>
		<p> Resultado: <?php echo $suma; ?></p>
 	</form>
 
 </body>
 </html>