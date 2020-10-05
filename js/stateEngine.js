var stateEngine = {
	state: null,
	start: function(){
		stateEngine.changeState(stateList.GAME);
	},
	changeState: function(newState){
		switch(newState){
			case stateList.LOADING:
				stateEngine.state = new LoadingState();
				break;
			case stateList.GAME:
				stateEngine.state= new GameState(stateList.GAME);
				break;
		}
	},
	update: function(r){
		stateEngine.state.update(r);
	},
	draw: function(){
		stateEngine.state.draw();
	}
};