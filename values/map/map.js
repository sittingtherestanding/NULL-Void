var uiPadding = 12

var Map = function()
{
	// Make the map square for development purposes
	this.width = l.room.height * 2
	this.height = l.room.height * 2

	this.gridSpacing = 18

	this.camera = {
		x: -uiPadding,
		y: -uiPadding
	}

	this.player = new Entity()
	this.player.setSprite('images/screens/conditions/marker.png')
			   .setSize(25, 25)
			   .setAnchor(12, 12)
			   .location = {
			   		x: 15,
			   		y: 15
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

		this.calculateDraw(this.player)
	}

	this.calculateDraw = function(entity)
	{
		entity.x = entity.location.x - this.camera.x + uiPadding
		entity.y = entity.location.y - this.camera.y + uiPadding

		entity.draw()
	}
}