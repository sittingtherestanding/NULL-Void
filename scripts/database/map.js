var Map = function()
{
	this.pencil = new Pencil()
	this.typewriter = new Typewriter()
	this.typewriter.setFont('bioliquid')

	this.blocks = new Blocks()

	this.titleSpacing = 20
	this.titleSize = l.room.width / 25

	this.width = 1500
	this.height = 1500

	this.gridSpacing = 30

	this.camera = {
		x: -padding,
		y: -padding
	}

	this.terrain = new Entity()
	this.terrain.setSprite('images/screens/conditions/terrain.png')
				.setOpacity(0.65)
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
		this.place(this.terrain)

		this.grid()

		this.enemy.rotate(-0.75)
		this.place(this.enemy, 'signal id', 'unknown')

		// Messy
		var lower = bottom - padding * 1.5 - this.blocks.tiny.height * 2 - this.blocks.title.height * 2

		// Block out map drawing that overflows the alloted space
        this.pencil.setPosition(0, 0).setColor(game.color).setSize(l.room.width, padding).fillRectangle()
        this.pencil.setPosition(0, 0).setColor(game.color).setSize(padding, l.room.height).fillRectangle()
        this.pencil.setPosition(l.room.width - padding, 0).setColor(game.color).setSize(padding, l.room.height).fillRectangle()
        this.pencil.setPosition(0, lower - padding).setColor(game.color).setSize(l.room.width, l.room.height - lower + padding).fillRectangle()

        // Draw a border around the map
        this.pencil.setPosition(padding, padding).setColor(colorThree).setStroke(2).setSize(l.room.width - padding * 2, lower - padding * 2).strokeRectangle()
	}
}