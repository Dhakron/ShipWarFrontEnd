var mouse = {
    x:0,
    y:0,
    getMousePos: function(evt){
        mouse.x=evt.clientX-((screenSize.width-areaGame.width)/2);
        mouse.y=evt.clientY;
    }
}