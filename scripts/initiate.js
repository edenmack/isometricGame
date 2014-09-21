/*
var person = sprite({
    width: 100,
    height: 100,
	ticksPerFrame: 5,	
	frameMax: 8,
	sy: 400,
    image: spriteImg,
	loop: true,
});*/

var person = sprite(SpriteLocations.person,200,100);
var floor1 = sprite(SpriteLocations.f1);
var floor2 = sprite(SpriteLocations.f0,100,50);
var floor3 = sprite(SpriteLocations.f1,200,100);
var wall1 = sprite(SpriteLocations.w0);
var wall2 = sprite(SpriteLocations.w0,100,50);


function gameLoop () {

	window.requestAnimationFrame(gameLoop);
  
	//evaluateMap(map);
	//sprite(SpriteLocations[map[0][0].floor]).update();

  
	/*
	floor1.update();
	floor2.update();
	floor3.update();
	wall1.update();
	wall2.update();
	person.update();*/
}



resize("floor");
resize("wall");
resize("object");
resize("roof");
gameLoop();
