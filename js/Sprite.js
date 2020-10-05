function Sprite(path,id,position){
    var pathElements = path.split("/");
    this.imgPath = "img/" + pathElements[pathElements.length -1];
    this.id=id + 1;
    this.position = position;
}
