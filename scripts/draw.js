//Load sprite sheets
var totalImagesToLoad = 2;

var sprite2Img = newImage("images/sprite sheet 02.png");
var spriteImg = newImage("images/sprite sheet.png");



//Context functions
function getCanvas(c) {return document.getElementById(c).getContext("2d");}


function sprite (options,xLoc,yLoc) {
                                
    var that = {};
	
	var maxYOffset = 600;
    
	that.ticksPerFrame = options.ticksPerFrame || 0;	
	that.frameMax = options.frameMax-1 || 7;
    that.width = options.width || 100;
    that.height = options.height || 100;
    that.image = options.image;	
	that.sx = options.sx || 0;
	that.sy = options.sy || 0;
	that.loop = options.loop || false;
	that.requiresUpdate = true;
	that.frameIndex = options.frameStartIndex || 0;//Math.round(Math.random()*that.frameMax);
	that.xOffset = options.xOffset || 0;
	that.yOffset = options.yOffset || 0;
	that.level = options.level || "object";
	that.position = {
		x: (xLoc || 0) + that.xOffset,
		y: (yLoc || 0) + that.yOffset,};
	
	that.tickCount = 0;

	that.render = function (level) {
        // Draw the animation
		level = level || that.level;		

		var ctx = getCanvas(level) || getCanvas("object");
		//ctx.clearRect(0, 0, that.width, that.height)		
		//ctx.canvas.width  = window.innerWidth;
		//ctx.canvas.height = window.innerHeight;
        ctx.drawImage(
           that.image,
           that.sx + that.frameIndex * that.width,
           that.sy,
           that.width,
           that.height,
           that.position.x,
           that.position.y,
           that.width,
           that.height);	   
    };
	that.update = function (level) {
		level = level || that.level;
		++that.tickCount;
		if(that.loop) {
			if(that.frameMax > 0 && that.tickCount > that.ticksPerFrame) {
				that.tickCount = 0;
				++that.frameIndex;
				if(that.frameIndex > that.frameMax) {
					that.frameIndex = 0;
				}			
			}			
			clear(level,that.position.x, that.position.y, that.width, that.height);	
		}
		if(that.loop || that.requiresUpdate) {
			that.requiresUpdate = false;
			that.render(level);		
		}
	}
	
    return that;
}

function clear(level,x,y,width,height) {
	var useResize = false;

	var ctx = getCanvas(level);
	if(useResize) {
		ctx.canvas.width = ctx.canvas.width;
	}else{
		ctx.clearRect(x, y, width, height);
	}
}

function resize(level) {
	var ctx = getCanvas(level) || getCanvas("object");
	ctx.canvas.width  = window.innerWidth;
	ctx.canvas.height = window.innerHeight;
}



