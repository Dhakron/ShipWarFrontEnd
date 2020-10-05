//namespace - espacio de nombres
//main loop - bucle principal
//ups - actualizaciones por segundo
//fps - frames por segundo
//callback
//1s = 1000ms
var mainLoop = {
	id: null,
	lastRegister: 0,
	ups: 0,
	fps: 0,
	iterate: function(temporalRegister) {
		mainLoop.id = window.requestAnimationFrame(mainLoop.iterate);
		mainLoop.update(temporalRegister);
		mainLoop.draw();
		if(temporalRegister - mainLoop.lastRegister > 999) {
			mainLoop.lastRegister = temporalRegister;
			console.log("UPS: " + mainLoop.ups + " | FPS: " + mainLoop.fps);
			mainLoop.ups = 0;
			mainLoop.fps = 0;
		}
	},
	stop: function() {

	},
	update: function(r) {
		stateEngine.update(r);
		mainLoop.ups++;
	},
	draw: function(registroTemporal) {
		stateEngine.draw();
		if(areaGame.update){
			areaGame.drawAreaGame();
		}
		mainLoop.fps++;
	}
};