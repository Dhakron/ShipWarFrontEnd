function LoadingState(){
    this.screen = new LoadingScreen();
}

LoadingState.prototype.update= function(){
    this.screen.update();
}

LoadingState.prototype.draw = function(){
    this.screen.draw();
}