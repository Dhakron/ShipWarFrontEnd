function Coordinate(x,y){
    this.x=x;
    this.y=y;
}
Coordinate.prototype.match = function(match){
    return (this.x == punto.x && this.y == punto.y)? true : false;
}