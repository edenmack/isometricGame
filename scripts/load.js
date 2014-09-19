//load scripts on demand
//
// count of loaded scripts
var scriptLoadedCount = 0;
function newScript(scriptPath) {
	var headID = document.getElementsByTagName("head")[0];         
	var theScript = document.createElement('script');
	theScript.type = 'text/javascript';	
	theScript.onload=scriptLoaded;
	theScript.src = scriptPath;
	headID.appendChild(theScript);
}

function scriptLoaded() {
	++scriptLoadedCount;
}


//load images on demand
//
// count of loaded images
var imageLoadedCount = 0;
function newImage(imagePath) {
	var theImg = new Image();
	theImg.src = imagePath;
	
	theImg.addEventListener("load", imageLoaded);
	return theImg;
}

function imageLoaded() {
	++imageLoadedCount
	
	if(totalImagesToLoad <= imageLoadedCount){
		newScript("images/SpriteLocations.js");
		newScript("scripts/initiate.js");
	}
}