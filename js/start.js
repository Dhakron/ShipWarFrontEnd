
var start = {
	initList: [
		screenSize.start(),
		areaGame.loadAreaGame(),
		stateEngine.start(),
		controls.start(),
		mainLoop.iterate(),
	],
	startGame: function(){
		start.loadInit(start.initList.shift());
	},
	loadInit: function(init){
		if(init){
			init(()=> start.loadInit(initList.shift()));
		}
	}
};

document.addEventListener('DOMContentLoaded', function() {
	start.startGame();
}, false);
