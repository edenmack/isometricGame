function evaluateMap(theMap) {
	var rowCount = 0;
	var rowOffset = 0;
	var tileWidth = 200;	
	var tileHeight = 50;
	
	for(var row=0; row < theMap.length; row++) {
		for(var col=0; col < theMap[row].length; col++) {
			rowOffset = rowCount%2 * tileWidth/2;
			//alert(row+","+col);

			if(theMap[row][col].floor != undefined) {
				sprite(SpriteLocations[theMap[row][col].floor],tileWidth*col + rowOffset,tileHeight*row).update();				
			}
			if(theMap[row][col].wall != undefined) {
				sprite(SpriteLocations[theMap[row][col].wall],tileWidth*col + rowOffset,tileHeight*row).update();				
			}
		}
		++rowCount;
	}
}