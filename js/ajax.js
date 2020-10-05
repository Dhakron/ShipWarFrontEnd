var loadMap = {
    load: function(path, callback){
        var req = new XMLHttpRequest();
        req.onreadystatechange = function(){
            if(req.readyState==XMLHttpRequest.DONE){
                if(req.status==200){//200: request ok!
                    callback(JSON.parse(req.responseText));
                }else if(req.status==400){//400: request error!
                    console.log("Error loading file");
                }else{
                    console.log("Error on ajax!");
                }
            }
        };
        req.open("GET",path,true);
        req.send();
    }
}