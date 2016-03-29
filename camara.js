(function(){
	var video = document.getElementById('camara');
		vandorUrl = window.URL || window.webkitURL;

	navigator.getUserMedia = 	navigator.getUserMedia ||
	                            navigator.webkitGetUserMedia ||
	                            navigator.mozGetUserMedia || 
	                            navigator.msGetUserMedia;

	navigator.getMedia({ 
		video: true, 
		audio: false 
		},

		function(stream){
			camara.src = vendorUrl.createObjectURL(stream);
			camara.play();
		},

		function(error){
			console.log("Ocurrió el siguiente error: " + err);
		}

	);
})();
