function evaluateMap(theMap) {
	var rowCount = 0;
	var rowOffset = 0;
	var tileWidth = 200;	
	
	for(var row=0; theMap.length-1; row++) {
		for(var col=0; theMap[row].length-1; col++) {
			rowOffset = rowCount%2 * tileWidth/2;

			if(theMap[row][col].floor != undefined) {
				sprite(SpriteLocations[theMap[row][col].floor],100,50).update();
			}
		}
		++rowCount;
	}
}