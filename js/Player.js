function Player(coordinatesMap){
    this.width= 66;
    this.height= 113;
    this.speed = 0;
    this.maxSpeed = 6;
    this.minSpeed = -3;
    this.controlSpeed = 0;
    this.controlUpdate = 0;
    this.orientationAngle = 0;
    this.dirX=0;
    this.dirY=1;
    this.centerX= (areaGame.width / 2);
    this.centerY= (areaGame.height / 2);
    this.canon1 = new Canon(1);
    this.canon2 = new Canon(2);
    this.canon3 = new Canon(3);
    this.canon4 = new Canon(4);
    this.canonList = [this.canon1,this.canon2,this.canon3,this.canon4];
    this.position= new Coordinate(this.centerX,this.centerY);
    this.coordinatesMap = coordinatesMap;
    this.pointA=new Coordinate(areaGame.width/2,1);
    this.pointB=new Coordinate(areaGame.width/2,areaGame.height);
    this.addStyle();
}

Player.prototype.addStyle= function(){
    var idHtml = "player";
    document.getElementById(idHtml).style.background = "url('img/Ships/ship (2).png')";
    document.getElementById(idHtml).style.position = "absolute";
    document.getElementById(idHtml).style.left =  (this.position.x -(this.width/2/areaGame.scaleResize)) + "px";
    document.getElementById(idHtml).style.top = (this.position.y -(this.height/2/areaGame.scaleResize))+ "px";
    document.getElementById(idHtml).style.width = (this.width/areaGame.scaleResize) + "px";
    document.getElementById(idHtml).style.height = (this.height/areaGame.scaleResize) + "px";
    document.getElementById(idHtml).style.zIndex = "10";    
    document.getElementById(idHtml).style.backgroundSize = this.width/areaGame.scaleResize+"px "+this.height/areaGame.scaleResize+"px";
    document.getElementById(idHtml).style.transform = "rotate(180deg)";
}

Player.prototype.draw = function(){
    var idHtml = "player";
    document.getElementById(idHtml).style.transform = "rotate("+(180+this.orientationAngle)+"deg)";
    if(areaGame.update){
        document.getElementById(idHtml).style.left =  (this.position.x -(this.width/2/areaGame.scaleResize)) + "px";
        document.getElementById(idHtml).style.top = (this.position.y -(this.height/2/areaGame.scaleResize))+ "px";
        document.getElementById(idHtml).style.width = (this.width/areaGame.scaleResize) + "px";
        document.getElementById(idHtml).style.height = (this.height/areaGame.scaleResize) + "px";
        document.getElementById(idHtml).style.backgroundSize = this.width/areaGame.scaleResize+"px "+this.height/areaGame.scaleResize+"px";
    }
    for (i=0; i<this.canonList.length; i++){
        this.canonList[i].draw(this.pointA,this.pointB);
    }
}

Player.prototype.update = function(r){
    if(areaGame.update){
        this.centerX= (areaGame.width / 2);
        this.centerY= (areaGame.height / 2);
        this.position= new Coordinate(this.centerX,this.centerY);
        this.pointA=new Coordinate(areaGame.width/2,1);
        this.pointB=new Coordinate(areaGame.width/2,areaGame.height);
        var angle= this.orientationAngle*(Math.PI/180);
        this.pointA.x= this.centerX+(this.pointA.x - this.centerX)*Math.cos(angle)-(this.pointA.y - this.centerY)*Math.sin(angle);
        this.pointA.y= this.centerY+(this.pointA.x - this.centerX)*Math.sin(angle)+(this.pointA.y - this.centerY)*Math.cos(angle);
        this.pointB.x= this.centerX+(this.pointB.x - this.centerX)*Math.cos(angle)-(this.pointB.y - this.centerY)*Math.sin(angle);
        this.pointB.y= this.centerY+(this.pointB.x - this.centerX)*Math.sin(angle)+(this.pointB.y - this.centerY)*Math.cos(angle);
    }
    if(controls.keyPressed('w')||controls.keyPressed('W')){
        if(this.speed<=this.maxSpeed&&this.controlSpeed==0){
            this.speed++;
        }
    }else if(controls.keyPressed('s')||controls.keyPressed('S')){
        if(this.speed>=this.minSpeed&&this.controlSpeed==0){
            this.speed-=2;
            if(this.speed<-3){
               this.speed=-3;
            }
        }
    } 
    if(controls.keyPressed('d')||controls.keyPressed('D')){
        if(this.controlUpdate==0){
            this.orientationAngle++;
            this.setOrientationMouse(1);
            for (i=0; i<this.canonList.length; i++){
                this.canonList[i].setMaxMinRange(1);
            }
            this.setOrientationAngle();
        }
    }else if(controls.keyPressed('a')||controls.keyPressed('A')){
        if(this.controlUpdate==0){
            this.orientationAngle--;
            this.setOrientationMouse(-1);
            for (i=0; i<this.canonList.length; i++){
                this.canonList[i].setMaxMinRange(-1);
            }
            this.setOrientationAngle();
        }
    }
    if(!controls.keyPressed('w')&&!controls.keyPressed('W')&&!controls.keyPressed('s')&&!controls.keyPressed('S')){
        if(this.speed==0&&this.controlSpeed==0){
            }else if(this.speed<0&&this.controlSpeed==0){
                this.speed++;
            }else if(this.controlSpeed==0){
                this.speed--;
            }
    }
    
    if(this.controlUpdate==0){
        this.coordinatesMap.x+= this.dirX*this.speed; 
        this.coordinatesMap.y-= this.dirY*this.speed;
    }
    this.controlUpdate=++this.controlUpdate%2;
    this.controlSpeed=++this.controlSpeed%20;
    for (i=0; i<this.canonList.length; i++){
        this.canonList[i].update(this.pointA,this.pointB,this.orientationAngle);
    }
   
}

Player.prototype.setOrientationAngle = function(){
    var angle= this.orientationAngle*(Math.PI/180);
    this.dirX= Math.sin(angle);
    this.dirY= Math.cos(angle);
}
Player.prototype.setOrientationMouse = function(orientationAngle){
    var angleA= (-90*(Math.PI/180))+(this.orientationAngle*(Math.PI/180));
    var angleB= (90*(Math.PI/180))+(this.orientationAngle*(Math.PI/180));
    this.pointA.x= this.centerX + (areaGame.height/2) * Math.cos(angleA);
    this.pointA.y= this.centerY + (areaGame.height/2) * Math.sin(angleA);
    this.pointB.x= this.centerX + (areaGame.height/2) * Math.cos(angleB);
    this.pointB.y= this.centerY + (areaGame.height/2) * Math.sin(angleB);
}