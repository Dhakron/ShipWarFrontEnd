function LoadingScreen(){
    this.id= "loadingScreen";
    this.infoPanel = document.getElementById("infoLoading");
    this.infoText = "Conectando con los servidores...";
    this.addStyle();
}
LoadingScreen.prototype.addStyle = function(){
    var doc= document.getElementById(this.id).style;
    doc.position = "absolute";
    doc.top = "0px";
    doc.width = areaGame.width + "px";
    doc.height = areaGame.height + "px";
    doc.zIndex = "20";
    doc.backgroundColor = "red";
    document.getElementById("infoLoading").style.fontSize = areaGame.width/50+"px";
    document.getElementById("infoLoading").style.textAlign = "center";
    document.getElementById("infoLoading").style.marginTop = areaGame.height/4*3.5+"px";
}
LoadingScreen.prototype.update = function(){
    if(areaGame.update){
        var doc= document.getElementById(this.id).style;
        doc.width = areaGame.width + "px";
        doc.height = areaGame.height + "px";
        document.getElementById("infoLoading").style.fontSize = areaGame.width/50+"px";
        document.getElementById("infoLoading").style.marginTop = areaGame.height/4*3.5+"px";
    }
}
LoadingScreen.prototype.draw = function(){
    document.getElementById("infoLoading").innerHTML = this.infoText;
}