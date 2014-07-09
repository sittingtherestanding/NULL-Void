var Map = function()
{
	var self = this

	this.pencil = new Pencil()

	this.layout = new Layout()

	// Make the map square for development purposes
	this.width = l.room.height * 2
	this.height = l.room.height * 2

	this.gridSpacing = 18

	this.camera = {
		x: -this.layout.padding,
		y: -this.layout.padding
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
		var i = Math.floor(self.width / self.gridSpacing)
		while (i--)
		{
			self.pencil.setColor(green).setOpacity(0.25).setStroke(1).setPosition(0, self.gridSpacing * i - self.camera.y).setEndPosition(l.dom.width, self.gridSpacing * i - self.camera.y).strokeLine()
		}

		// Column pass
		var i = Math.floor(self.height / self.gridSpacing)
		while (i--)
		{
			self.pencil.setColor(green).setOpacity(0.25).setStroke(1).setPosition(self.gridSpacing * i - self.camera.x, 0).setEndPosition(self.gridSpacing * i - self.camera.x, l.dom.height).strokeLine()
		}

		self.calculateDraw(self.player)

		return self
	}

	this.calculateDraw = function(entity)
	{
		entity.x = entity.location.x - self.camera.x + self.layout.padding
		entity.y = entity.location.y - self.camera.y + self.layout.padding

		entity.draw()

		return self
	}
}