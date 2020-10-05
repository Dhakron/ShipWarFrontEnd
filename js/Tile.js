function Tile(tileX, tileY, z, width,height, sprite){
    this.area = new Area(tileX,tileY,width,height);
    this.zIndex = z;
    this.sprite = sprite;
    this.idHtml = "x"+tileX+"y"+tileY+"z"+z;
    this.html = '<div id="'+this.idHtml+'" class="tile"></div>';
}
Tile.prototype.addStyle = function(){
    if(document.getElementById(this.idHtml)==null){
        throw("El ID " + this.idHtml + " no existe!");
    }else{
    document.getElementById(this.idHtml).style.position = "absolute";
    document.getElementById(this.idHtml).style.left = (this.area.x * this.area.width) + "px";
	document.getElementById(this.idHtml).style.top = (this.area.y * this.area.height) + "px";
	document.getElementById(this.idHtml).style.width = this.area.width + "px";
	document.getElementById(this.idHtml).style.height = this.area.height + "px";
	document.getElementById(this.idHtml).style.zIndex = "" + this.zIndex;
	document.getElementById(this.idHtml).style.background = "url('" + this.sprite.imgPath + "')";

	var x = this.sprite.position.x;
	var y = this.sprite.position.y;
    //Pintar solo el tile correspondiente de la imagen que contiene todos los tiles
    document.getElementById(this.idHtml).style.backgroundPosition = "-" + x + "px -" + y + "px";
    document.getElementById(this.idHtml).style.backgroundClip = "border-box";
	document.getElementById(this.idHtml).style.outline = "1px solid transparent";
    }
}
Tile.prototype.move= function(){
    document.getElementById(this.idHtml).style.transform = 'translate3d('+x+'px,'+ y +'px, 0)';
}