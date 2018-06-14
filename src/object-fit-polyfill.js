/*
* object-fit-polyfill v1.0.0 Copyright (c) 2018 AJ Savino
* https://github.com/koga73/object-fit-polyfill
* MIT License
*/
(function(window){
	var _ATTRIB = "data-object-fit";
	var _CLASS = "object-fit-polyfill";

	window.objectFitPolyfill = function(){
		if (_supportsObjectFit()){
			return;
		}
		var els = document.querySelectorAll("[" + _ATTRIB + "]");
		var elsLen = els.length;
		for (var i = 0; i < elsLen; i++){
			var el = els[i];
			var src = el.src || null;
			if (src){
				if (el.className.indexOf(_CLASS) == -1){
					el.className += " " + _CLASS;
				}
				el.style.display = "none";
				el.parentNode.style.backgroundImage = "url(" + src + ")";
			}
		}
	}

	//Borrowed from https://github.com/constancecchen/object-fit-polyfill
	function _supportsObjectFit(){
		var edgeVersion = window.navigator.userAgent.match(/Edge\/(\d{2})\./);
		var edgePartialSupport = (edgeVersion) ? (parseInt(edgeVersion[1], 10) >= 16) : false;
		if ("objectFit" in document.documentElement.style !== false && !edgePartialSupport){
			return true;
		}
		return false;
	}

	document.addEventListener("DOMContentLoaded", function(){
		window.objectFitPolyfill();
	});
})(window);