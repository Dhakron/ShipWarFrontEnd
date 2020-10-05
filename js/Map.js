function Map(objectJSON, img, mainPlayer){
    this.position = new Coordinate(0,0);
    this.imgPath = img;
    this.width=12000;
    this.height=12000;
    this.idHtml = "map";
    this.mainPlayer = mainPlayer;
    this.addStyle();
}

Map.prototype.update = function(r){
    if(this.mainPlayer!=null){
        this.position.x = this.mainPlayer.coordinatesMap.x;
        this.position.y = this.mainPlayer.coordinatesMap.y;
    }
}

Map.prototype.draw = function(){
    if(this.mainPlayer!=null){
        document.getElementById(this.idHtml).style.transform = "translate3d("+((-this.position.x/areaGame.scaleResize)+areaGame.width/2)+"px, "+((-this.position.y/areaGame.scaleResize)+areaGame.height/2)+"px,0)";
        if(areaGame.update){
            document.getElementById(this.idHtml).style.backgroundSize = this.width/areaGame.scaleResize+"px "+this.height/areaGame.scaleResize+"px";
            document.getElementById(this.idHtml).style.width = this.width/areaGame.scaleResize+"px";
            document.getElementById(this.idHtml).style.height = this.height/areaGame.scaleResize+"px";            
        }
    }
}

Map.prototype.addStyle= function(){
    if(document.getElementById(this.idHtml)==null){
        throw("El ID " + this.idHtml + " no existe!");
    }else{
    document.getElementById(this.idHtml).style.position = "absolute";
    document.getElementById(this.idHtml).style.left = "0";
	document.getElementById(this.idHtml).style.top = "0";
	document.getElementById(this.idHtml).style.width = this.width/areaGame.scaleResize+"px";
    document.getElementById(this.idHtml).style.height = this.height/areaGame.scaleResize+"px";
	document.getElementById(this.idHtml).style.zIndex = "1";
    document.getElementById(this.idHtml).style.background = "url('" + this.imgPath + "')";
    document.getElementById(this.idHtml).style.backgroundSize = this.width/areaGame.scaleResize+"px "+this.height/areaGame.scaleResize+"px";
    document.getElementById(this.idHtml).style.backgroundClip = "border-box";
    document.getElementById(this.idHtml).style.outline = "1px solid transparent";
    }
}