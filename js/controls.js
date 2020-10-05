var controls = {
	keys: new Array(),
	start: function() {
		document.onkeydown = controls.saveKey;
		document.onkeyup = controls.deleteKey;
	},
	saveKey: function(e) {
		if(controls.keys.indexOf(e.key)==-1){
			controls.keys.push(e.key);
		}
	},
	deleteKey:function(e){
		if(controls.keys.indexOf(e.key)!==-1){
			controls.keys.splice(controls.keys.indexOf(e.key),1);
		}
	},
	keyPressed: function(key) {
		return (controls.keys.indexOf(key) !== -1) ? true : false;
	}
};
