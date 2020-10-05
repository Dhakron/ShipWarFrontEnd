function SpriteList(dataSprites){
    this.imgPath = dataSprites.image;
    console.log(dataSprites.image);
    this.imgWidth = parseInt(dataSprites.imagewidth);
    this.imgHeight = parseInt(dataSprites.imageheight);
    this.spriteWidth = parseInt(dataSprites.tilewidth);
    this.spriteHeight = parseInt(dataSprites.tileheight);
    this.firstSprite = parseInt(dataSprites.firstgid);
    this.totalWidthSprites = this.imgWidth / this.spriteWidth;
    this.totalHeightSprites = this.imgHeight / this.spriteHeight;
    this.totalSprites = this.totalHeightSprites * this. totalWidthSprites;

    this.sprites = [];
    for (i=0; i < this.totalSprites; i++){
        var id = this.firstSprite - 1 + i;
        this.sprites.push(new Sprite(this.imgPath, id, this.getCoordinates(id)));
    }
}

SpriteList.prototype.getCoordinates = function(idSprite){
    var y = Math.floor(idSprite / this.totalWidthSprites);
    var x = idSprite % this.totalWidthSprites;
    return new Coordinate(x * this.spriteWidth, y * this.spriteHeight);
}