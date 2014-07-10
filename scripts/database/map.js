var Map = function()
{
	this.pencil = new Pencil()
	this.typewriter = new Typewriter()
	this.typewriter.setFont('bioliquid')

	this.titleSpacing = 20
	this.titleSize = l.room.width / 25

	// Make the map square for development purposes
	this.width = 1500
	this.height = 1500

	this.gridSpacing = 30

	this.camera = {
		x: -padding,
		y: -padding
	}

	this.terrain = new Entity()
	this.terrain.setSprite('images/screens/conditions/terrain.png')
				.setOpacity(0.6)
				.setSize(1500, 1500)
				.location = {
					x: 0,
					y: 0
				}

	this.enemy = new Entity()
	this.enemy.setSprite('images/screens/conditions/enemy_marker.png')
			   .setSize(30, 30)
			   .setAnchor(15, 15)
			   .location = {
				  x: 50,
				  y: 75
			   }

	this.place = function(entity, title, content)
	{
		entity.x = entity.location.x - this.camera.x
		entity.y = entity.location.y - this.camera.y

		if (title)
		{
			this.typewriter.setColor(colorThree).setSize(this.titleSize).setPosition(entity.x + this.titleSpacing, entity.y + 1 - this.titleSize).write(title + ':')
		}
		
		if (content)
		{
			this.typewriter.setColor(colorWarning).setSize(this.titleSize).setPosition(entity.x + this.titleSpacing, entity.y + 1).write(content)
		}

		entity.draw()
	}

	this.grid = function()
	{
		// Row pass
		var i = Math.floor(this.width / this.gridSpacing)
		while (i--)
		{
			this.pencil.setColor(colorThree).setOpacity(0.15).setStroke(1).setPosition(0, this.gridSpacing * i - this.camera.y).setEndPosition(l.dom.width, this.gridSpacing * i - this.camera.y).strokeLine()
		}

		// Column pass
		var i = Math.floor(this.height / this.gridSpacing)
		while (i--)
		{
			this.pencil.setColor(colorThree).setOpacity(0.15).setStroke(1).setPosition(this.gridSpacing * i - this.camera.x, 0).setEndPosition(this.gridSpacing * i - this.camera.x, l.dom.height).strokeLine()
		}
	}

	this.draw = function()
	{
		this.place(this.terrain)

		this.grid()

		this.enemy.rotate(-0.75)
		this.place(this.enemy, 'signal id', 'unknown')
	}
}