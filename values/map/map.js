var Map = function()
{
	// Make the map square for development purposes
	this.width = l.room.height * 2
	this.height = l.room.height * 2

	this.gridSpacing = l.room.width / 5

	this.camera = {
		x: 0,
		y: 0
	}
}