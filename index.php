<!doctype html>

<html lang="es">
	<head>
		<meta charset="utf-8">
		<title>Juego web</title>
		<meta name="description" conent="Ship War">
		<meta name="author" conent="Alex Abrudan">
		<link rel="stylesheet" type="text/css" href="css/css.css">
	</head>
	<body>
		<div id="areaGame">
			<div id="loadingScreen">
				<p id="infoLoading"></p>
			</div>
			<div id="game">
				<div id="player"></div>
				<div id="canon1"></div>
				<div id="canon2"></div>
				<div id="canon3"></div>
				<div id="canon4"></div>
				<div id="map"></div>
			</div>
			
		</div>
		<?php
			include_once 'app/loadJS.inc.php';
		?>
	</body>
</html>