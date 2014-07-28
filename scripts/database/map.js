var Map = function()
{
	this.pencil = new Pencil()
	this.typewriter = new Typewriter()
	this.typewriter.setFont('bioliquid')
	this.scissors = new Scissors()

	this.blocks = new Blocks()

	this.titleSpacing = 20
	this.titleSize = l.room.width / 25

	this.width = 1500
	this.height = 1500

	this.gridSpacing = 30

	this.camera = {
		x: 0,
		y: 0
	}

	this.terrain = new Entity()
	this.terrain.setSprite('images/screens/conditions/terrain.png')
				.setOpacity(0.65)
				.setSize(1500, 1500)
				.location = {
					x: padding,
					y: padding
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
			this.pencil.setColor(colorThree).setOpacity(0.15).setStroke(1).setPosition(0, this.gridSpacing * i - this.camera.y).setEndPosition(l.room.width, this.gridSpacing * i - this.camera.y).strokeLine()
		}

		// Column pass
		var i = Math.floor(this.height / this.gridSpacing)
		while (i--)
		{
			this.pencil.setColor(colorThree).setOpacity(0.15).setStroke(1).setPosition(this.gridSpacing * i - this.camera.x, 0).setEndPosition(this.gridSpacing * i - this.camera.x, l.room.height).strokeLine()
		}
	}

	this.draw = function()
	{
		// Messy
		var lower = bottom - padding * 1.5 - this.blocks.tiny.height * 2 - this.blocks.title.height * 2

		this.scissors.mark(padding, padding, l.room.width - padding * 2, lower - padding * 2)
		this.place(this.terrain)

		this.grid()

		this.enemy.rotate(-0.75)
		this.place(this.enemy, 'signal id', 'unknown')
		this.scissors.cut()

        // Draw a border around the map
        this.pencil.setPosition(padding, padding).setColor(colorThree).setStroke(2).setSize(l.room.width - padding * 2, lower - padding * 2).strokeRectangle()
	}
}