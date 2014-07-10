var Navigation = function()
{
	var self = this

	this.pencil = new Pencil()
	this.typewriter = new Typewriter()
	this.typewriter.setFont('Furore') // Change to furoreregular to load from the web

	this.blocks = new Blocks()

	this.fontSize = Math.round(l.room.width / 25)
	this.x = padding
	this.y = bottom

		this.vitals = {
			x: padding,
			y: this.y + padding * 1.75
		}

		this.conditions = {
			x: l.room.width / 8 * 2.8,
			y: this.y + padding * 1.75
		}

		this.drones = {
			x: l.room.width / 8 * 4.8,
			y: this.y + padding * 1.75
		}

		this.inventory = {
			x: l.room.width - padding,
			y: this.y + padding * 1.75
		}

	this.sun = new Entity()
	this.sun.setSprite('images/screens/conditions/sun.png')
				.setPosition(padding, this.y)
				.setSize(25, 25)
				.setAnchor(12, 12)

	this.draw = function()
	{
		self.pencil.setOpacity(self.blocks.opacity).setColor(gray).setPosition(padding, bottom).setSize(l.room.width - padding * 2, 2).fillRectangle()
		
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
		self.sun.x = padding * 1.5 + (l.room.width - padding * 3) / 100 * daylight

		self.sun.draw()
		*/

		self.typewriter.setSize(self.fontSize)

		if (player.temperature.warning || player.bloodPressure.warning || player.heart.warning || player.breathing.warning)
		{
			self.typewriter.setColor(orange)
		}
		else
		{
			self.typewriter.setColor(tan)
		}

		self.typewriter.setAlignment('left').setOpacity(self.blocks.opacity).setPosition(self.vitals.x, self.vitals.y).write('vitals')

		self.typewriter.setColor(tan)
		self.typewriter.setAlignment('center').setOpacity(self.blocks.opacity).setPosition(self.conditions.x, self.conditions.y).write('conditions')
		self.typewriter.setAlignment('center').setOpacity(self.blocks.opacity).setPosition(self.drones.x, self.drones.y).write('drones')
		self.typewriter.setAlignment('right').setOpacity(self.blocks.opacity).setPosition(self.inventory.x, self.inventory.y).write('inventory')
		
		return self
	}
}