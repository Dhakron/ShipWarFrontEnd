<?php

$date = new DateTime();

$jsList = array(
	"js/mouse.js",
	"js/screenSize.js",
	"js/areaGame.js",
	"js/LoadingScreen.js",
	"js/LoadingState.js",
	"js/Sprite.js",
	"js/Tile.js",
	"js/TileMapLayer.js",
	"js/SpriteList.js",
	"js/stateList.js",
	"js/ajax.js",
	"js/GameState.js",
	"js/stateEngine.js",
	"js/Canon.js",
	"js/Coordinate.js",
	"js/Player.js",
	"js/Map.js",
	"js/controls.js",
	"js/mainLoop.js",
	"js/start.js"
);
//Esto va a permitir que el navegador no use el cache al cargar nuestro js.
foreach($jsList as $js) {
	echo '<script src="' . $js . '?' . $date -> getTimestamp() . '"></script>';
	echo nl2br("\n");
}