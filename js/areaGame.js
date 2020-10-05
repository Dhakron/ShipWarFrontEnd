var areaGame= {
	width : null,
	height : null,
	scaleResize: null,
	idHtml:"areaGame",
	tileWidth : 64,
	tileHeight : 64,
	totaltilex : 20,
	totaltiley : 10,
	update:false,
	loadAreaGame : function(){
		var tileX= Math.floor(screenSize.width/(areaGame.totaltilex));
		var tileY= Math.floor(screenSize.height/(areaGame.totaltiley));
		if((tileX*areaGame.totaltiley)<=screenSize.height){
			areaGame.width=tileX*areaGame.totaltilex;
			areaGame.height=tileX*areaGame.totaltiley;
			areaGame.scaleResize=(areaGame.tileWidth*areaGame.totaltilex) / areaGame.width;
		}else if((tileY*areaGame.totaltilex)<=screenSize.width){
			areaGame.width=tileY*areaGame.totaltilex;
			areaGame.height=tileY*areaGame.totaltiley;
			areaGame.scaleResize=(areaGame.tileWidth*areaGame.totaltilex) / areaGame.width;
		}
		var area = document.getElementById('areaGame');
		area.addEventListener('mousemove',{});
		areaGame.update=true;
	},
	drawAreaGame: function(){
		document.getElementById(this.idHtml).style.overflow = "hidden";
		document.getElementById(this.idHtml).style.position = "absolute";
		document.getElementById(this.idHtml).style.width = areaGame.width+"px";
		document.getElementById(this.idHtml).style.height = areaGame.height+"px";
		document.getElementById(this.idHtml).style.left = (screenSize.width-areaGame.width)/2+"px";
		document.getElementById(this.idHtml).style.top = (screenSize.height-areaGame.height)/2+"px";
		document.getElementById(this.idHtml).style.zIndex = "1";
		document.getElementById(this.idHtml).style.border = "1px solid red";
		var area = document.getElementById('areaGame');
		area.addEventListener('mousemove', function(evt) {
			mouse.getMousePos(evt);
		});
		areaGame.update=false;
	}
}

