var Navigation = function()
{
	this.pencil = new Pencil()
	this.typewriter = new Typewriter()
	this.typewriter.setFont('bioliquid') // Change to furoreregular to load from the web

	this.blocks = new Blocks()

	this.fontSize = Math.round(l.room.width / 20)
	this.x = padding
	this.y = bottom
		this.conditions = {
			x: padding,
			y: this.y + padding * 1.65,
			divider: l.room.width / 8 * 2.5
		}

		this.vitals = {
			x: l.room.width / 8 * 3.15,
			y: this.y + padding * 1.65,
			divider: l.room.width / 8 * 4
		}

		this.drones = {
			x: l.room.width / 8 * 4.8,
			y: this.y + padding * 1.65
		}

		this.inventory = {
			x: l.room.width - padding,
			y: this.y + padding * 1.65
		}

	/*
	this.sun = new Entity()
	this.sun.setSprite('images/screens/conditions/sun.png')
				.setPosition(padding, this.y)
				.setSize(25, 25)
				.setAnchor(12, 12)
	*/

	this.draw = function()
	{
		// Watch for clicks on navigation buttons
		if (mouse.leftClick && mouse.y > navigation.y)
		{
			if (mouse.x > padding && mouse.x < this.conditions.divider)
			{
				currentScreen = 'conditions'
			}
			else if (mouse.x > this.conditions.divider && mouse.x < this.vitals.divider)
			{
				currentScreen = 'vitals'
			}
		}

		this.pencil.setColor(colorFour).setPosition(padding, bottom).setSize(l.room.width - padding * 2, 2).fillRectangle()
		
		/*
		if (daylight < 100)
		{
			daylight += 0.01
		}
		else
		{
			daylight = 0
		}

		// Reposition the sun to show time
		this.sun.x = padding * 1.5 + (l.room.width - padding * 3) / 100 * daylight

		this.sun.draw()
		*/

		this.typewriter.setSize(this.fontSize)

		if (player.temperature.warning || player.bloodPressure.warning || player.heart.warning || player.breathing.warning)
		{
			this.typewriter.setColor(colorWarning)
		}
		else
		{
			this.typewriter.setColor(colorOne)
		}

		this.typewriter.setAlignment('left').setPosition(this.conditions.x, this.conditions.y).write('conditions')

		this.typewriter.setColor(colorOne)
		this.typewriter.setAlignment('center').setPosition(this.vitals.x, this.vitals.y).write('vitals')
		this.typewriter.setAlignment('center').setPosition(this.drones.x, this.drones.y).write('drones')
		this.typewriter.setAlignment('right').setPosition(this.inventory.x, this.inventory.y).write('inventory')
	}
}