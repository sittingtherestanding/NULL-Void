var uiPadding = 12

var Map = function()
{
	// Make the map square for development purposes
	this.width = l.room.height * 2
	this.height = l.room.height * 2

	this.gridSpacing = 20

	this.camera = {
		x: 0,
		y: 0
	}

	this.viewport = {
		width: l.room.width - uiPadding * 2,
		height: screens.conditions
	}

	this.draw = function()
	{
		// Row pass
		var i = Math.floor(this.width / this.gridSpacing)
		while (i--)
		{
			pencil.setColor(green).setOpacity(0.25).setStroke(1).setPosition(0, this.gridSpacing * i - this.camera.y).setEndPosition(l.dom.width, this.gridSpacing * i - this.camera.y).strokeLine()
		}

		// Column pass
		var i = Math.floor(this.height / this.gridSpacing)
		while (i--)
		{
			pencil.setColor(green).setOpacity(0.25).setStroke(1).setPosition(this.gridSpacing * i - this.camera.x, 0).setEndPosition(this.gridSpacing * i - this.camera.x, l.dom.height).strokeLine()
		}
	}
}