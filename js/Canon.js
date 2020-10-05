function Canon(type){
    this.width=30;
    this.height=30;
    this.canonCoordenates = null;
    this.maxCanonAngleRange = null;
    this.minCanonAngleRange = null;
    this.maxCanonRadiusRange = null;
    this.minCanonRadiusRange = null;
    this.radius=null;
    this.angle=null;
    this.canonSpeed = 0.02;
    this.dirX= 0;
    this.dirX= 1;
    this.type = type;
    this.coordinates = null;
    this.min = new Coordinate(0,0);
    this.max = new Coordinate(0,0);
    this.setCoordinates();
    this.idHtml="canon"+type;
    this.addStyle();
}

Canon.prototype.update = function(pointA,pointB,a){
    if(areaGame.update){
        this.centerX= (areaGame.width / 2);
        if(this.type==1||this.type==3){
            this.centerY= (areaGame.height / 2)-(this.height/areaGame.scaleResize);    
        }else{
            this.centerY= (areaGame.height / 2)+(this.height/areaGame.scaleResize);
        }
        this.minCanonRadiusRange = 50/areaGame.scaleResize;
        this.maxCanonRadiusRange = 400/areaGame.scaleResize;
    }
    this.moveCanon(pointA,pointB);
}
Canon.prototype.getOrientationPosition= function(pointA,pointB){
    var d = ((mouse.x-pointA.x)*(pointB.y-pointA.y)-(mouse.y-pointA.y)*(pointB.x-pointA.x));
    if(d<0){
        return true;
    }else{
        return false;
    }
}


Canon.prototype.moveCanon=function(pointA,pointB){
    this.coordinates.x+=(mouse.x-this.coordinates.x)*(this.canonSpeed/areaGame.scaleResize);
    this.coordinates.y+=(mouse.y- this.coordinates.y)*(this.canonSpeed/areaGame.scaleResize);
    var maxAngle=(this.maxCanonAngleRange*(Math.PI/180));
    var minAngle=(this.minCanonAngleRange*(Math.PI/180));
    var myAngle= Math.atan2(this.coordinates.y-this.centerY,this.coordinates.x - this.centerX);
    var dist = Math.sqrt( Math.pow((this.centerX-this.coordinates.x), 2) + Math.pow((this.centerY-this.coordinates.y), 2) );
    if(dist<this.minCanonRadiusRange){
        dist=this.minCanonRadiusRange;
    }else if(dist>this.maxCanonRadiusRange){
        dist=this.maxCanonRadiusRange;
    }
    this.coordinates.x= this.centerX + (dist) * Math.cos(myAngle);
    this.coordinates.y= this.centerY + (dist) * Math.sin(myAngle);
    this.max = new Coordinate(this.centerX + (this.maxCanonRadiusRange) * Math.cos(maxAngle),this.centerY + (this.maxCanonRadiusRange) * Math.sin(maxAngle));
    this.min = new Coordinate(this.centerX + (this.maxCanonRadiusRange) * Math.cos(minAngle),this.centerY + (this.maxCanonRadiusRange) * Math.sin(minAngle));
    var centerPoint = new Coordinate(this.centerX,this.centerY);
    var max = ((this.coordinates.x-this.max.x)*(centerPoint.y-this.max.y)-(this.coordinates.y-this.max.y)*(centerPoint.x-this.max.x));
    var min = ((this.coordinates.x-this.min.x)*(centerPoint.y-this.min.y)-(this.coordinates.y-this.min.y)*(centerPoint.x-this.min.x)); 
    var d = ((mouse.x-pointA.x)*(pointB.y-pointA.y)-(mouse.y-pointA.y)*(pointB.x-pointA.x));
    if(max>0){
        this.coordinates.x= this.centerX + (dist) * Math.cos(maxAngle);
        this.coordinates.y= this.centerY + (dist) * Math.sin(maxAngle);
    }else if(min<0){
        this.coordinates.x= this.centerX + (dist) * Math.cos(minAngle);
        this.coordinates.y= this.centerY + (dist) * Math.sin(minAngle);
    }
    
}    

Canon.prototype.draw = function(pointA,pointB){
    if(areaGame.update){
        document.getElementById(this.idHtml).style.width = (this.width/areaGame.scaleResize) + "px";
        document.getElementById(this.idHtml).style.height = (this.height/areaGame.scaleResize) + "px";
        document.getElementById(this.idHtml).style.zIndex = "10";
        document.getElementById(this.idHtml).style.backgroundSize = this.width/areaGame.scaleResize+"px "+this.height/areaGame.scaleResize+"px"
    }

    if(this.getOrientationPosition(pointA,pointB)&&(this.type==3||this.type==4)){
        document.getElementById(this.idHtml).style.left = this.coordinates.x - (this.width/2/areaGame.scaleResize)+ "px";
        document.getElementById(this.idHtml).style.top = this.coordinates.y - (this.height/2/areaGame.scaleResize)+ "px";
    }else if(!this.getOrientationPosition(pointA,pointB)&&(this.type==1||this.type==2)){
        document.getElementById(this.idHtml).style.left = this.coordinates.x - (this.width/2/areaGame.scaleResize)+ "px";
        document.getElementById(this.idHtml).style.top = this.coordinates.y - (this.height/2/areaGame.scaleResize)+ "px";
    }else{
        document.getElementById(this.idHtml).style.left = -200+ "px";
        document.getElementById(this.idHtml).style.top = -200+ "px";
    }
    
}

Canon.prototype.addStyle = function(){
    document.getElementById(this.idHtml).style.position = "absolute";
    document.getElementById(this.idHtml).style.background = "url('img/Ships/objetive.png')";
    document.getElementById(this.idHtml).style.left = this.coordinates.x - (this.width/2/areaGame.scaleResize)+ "px";
    document.getElementById(this.idHtml).style.top = this.coordinates.y - (this.height/2/areaGame.scaleResize)+ "px";
    document.getElementById(this.idHtml).style.width = (this.width/areaGame.scaleResize) + "px";
    document.getElementById(this.idHtml).style.height = (this.height/areaGame.scaleResize) + "px";
    document.getElementById(this.idHtml).style.zIndex = "10";
    document.getElementById(this.idHtml).style.backgroundSize = this.width/areaGame.scaleResize+"px "+this.height/areaGame.scaleResize+"px";
}

Canon.prototype.setCoordinates=function(){
    this.centerX= (areaGame.width / 2);
        if(this.type==1||this.type==3){
            this.centerY= (areaGame.height / 2)-(this.height/areaGame.scaleResize);    
        }else{
            this.centerY= (areaGame.height / 2)+(this.height/areaGame.scaleResize);
        }
    switch(this.type){
        case 1:
            this.coordinates=new Coordinate(this.centerX + 100/areaGame.scaleResize + 66/areaGame.scaleResize/2,this.centerY - ((113/4)/areaGame.scaleResize));
            this.minCanonAngleRange = -40;
            this.maxCanonAngleRange = 40;
            this.angle=-35;
            break;
        case 2:
            this.coordinates=new Coordinate(this.centerX + 100/areaGame.scaleResize  + 66/areaGame.scaleResize/2,this.centerY + ((113/4))/areaGame.scaleResize);
            this.minCanonAngleRange = -40;
            this.maxCanonAngleRange = 40;
            this.angle=35;
            break;
        case 3:
            this.coordinates=new Coordinate(this.centerX - 100/areaGame.scaleResize - 66/areaGame.scaleResize/2,this.centerY - (113/4)/areaGame.scaleResize);
            this.minCanonAngleRange = 180;
            this.maxCanonAngleRange = 250;
            this.angle=-145;
            break;
        case 4:
            this.coordinates=new Coordinate(this.centerX - 100/areaGame.scaleResize -66/areaGame.scaleResize/2,this.centerY + ((113/4))/areaGame.scaleResize);
            this.minCanonAngleRange = 110;
            this.maxCanonAngleRange = 180;
            this.angle=145;
            break;
    }
    this.minCanonRadiusRange = 50/areaGame.scaleResize;
    this.maxCanonRadiusRange = 400/areaGame.scaleResize;
    this.radius = 200/areaGame.scaleResize;        
}

Canon.prototype.setMaxMinRange = function(orientation){
    this.minCanonAngleRange += orientation;
    this.maxCanonAngleRange += orientation;
}
