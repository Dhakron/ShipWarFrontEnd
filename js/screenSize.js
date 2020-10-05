var screenSize = {
	width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
	height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
	tiles: 100,
	scale: 1,
	start: function() {
		window.addEventListener("resize", function(e) {
			screenSize.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
			screenSize.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
			areaGame.loadAreaGame();
		});
	}
};