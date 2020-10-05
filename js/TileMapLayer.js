function TileMapLayer(layerData, idZ, widthTile, heightTile, spriteLists){
    this.totalWidthTile = parseInt(layerData.width);
    this.totalHeightTile = parseInt(layerData.height);
    this.x = parseInt(layerData.x);
    this.y = parseInt(layerData.y);
    this.z = idZ;
    this.tiles = [];
    for(y = 0; y < this.totalHeightTile; y++){
        for(x = 0; x < this.totalWidthTile; x++){
            var id= layerData.data[x + y * this.totalWidthTile];
            if(id==0){
                this.tiles.push(null);
            }else{
                var sprite = this.findSpriteById(id - 1, spriteLists);
                this.tiles.push(new Tile(x,y,idZ,widthTile,heightTile,sprite));
            }
        }
    }
}
TileMapLayer.prototype.findSpriteById = function(id, spriteLists){
       if(id >= spriteLists[0].firstSprite -1 &&
        id<spriteLists[0].totalSprites + spriteLists[0].firstSprite+1){
            return spriteLists[0].sprites[Math.abs(spriteLists[0].firstSprite -1 - id)];
       }else{
        throw "The sprite id:"+id+" dons't exists!";
       }
}