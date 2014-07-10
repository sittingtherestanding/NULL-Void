var Map = function()
{
	this.pencil = new Pencil()
	this.typewriter = new Typewriter()
	this.typewriter.setFont('bioliquid')

	this.titleSpacing = 20
	this.titleSize = l.room.width / 25

	// Make the map square for development purposes
	this.width = l.room.height * 2
	this.height = l.room.height * 2

	this.gridSpacing = 18

	this.camera = {
		x: -padding,
		y: -padding
	}

	this.enemy = new Entity()
	this.enemy.setSprite('images/screens/conditions/enemy_marker.png')
			   .setSize(30, 30)
			   .setAnchor(15, 15)
			   .location = {
			   		x: 15,
			   		y: 15
			   }

	this.place = function(entity, title, content)
	{
		entity.x = entity.location.x - this.camera.x + padding
		entity.y = entity.location.y - this.camera.y + padding

		this.typewriter.setColor(colorThree).setSize(this.titleSize).setPosition(entity.x + this.titleSpacing, entity.y + 1 - this.titleSize).write(title + ':')
		this.typewriter.setColor(colorWarning).setSize(this.titleSize).setPosition(entity.x + this.titleSpacing, entity.y + 1).write(content)

		entity.draw()
	}

	this.grid = function()
	{
		// Row pass
		var i = Math.floor(this.width / this.gridSpacing)
		while (i--)
		{
			this.pencil.setColor(colorFour).setStroke(1).setPosition(0, this.gridSpacing * i - this.camera.y).setEndPosition(l.dom.width, this.gridSpacing * i - this.camera.y).strokeLine()
		}

		// Column pass
		var i = Math.floor(this.height / this.gridSpacing)
		while (i--)
		{
			this.pencil.setColor(colorFour).setStroke(1).setPosition(this.gridSpacing * i - this.camera.x, 0).setEndPosition(this.gridSpacing * i - this.camera.x, l.dom.height).strokeLine()
		}
	}

	this.draw = function()
	{
		this.enemy.rotate(-0.75)

		this.grid()

		this.place(this.enemy, 'signal', 'unknown')
	}
}