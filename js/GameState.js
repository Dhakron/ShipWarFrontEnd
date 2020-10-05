function GameState(idState){
    this.mapReady=false;
    this.map=null;
    this.player = null;
    var that = this;
    loadMap.load("maps/prueba2.json",function(objectJSON){
        that.player = new Player(new Coordinate(1000,1000));
        that.map= new Map(objectJSON,"maps/prueba4.png",that.player);
        that.mapReady=true;
        that.map.mainPlayer = that.player;
        console.log("Mapa cargado!");
    });
}

GameState.prototype.update= function(r){
    if(this.mapReady){
        this.player.update(r);
        this.map.update(r);
    }
}

GameState.prototype.draw = function(){
    if(this.mapReady){
        this.player.draw();
        this.map.draw(this.player.coordinatesMap.x,this.player.coordinatesMap.y);
    }
}