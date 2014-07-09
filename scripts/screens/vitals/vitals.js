this.Vitals = function()
{
	var self = this

	this.pencil = new Pencil()
	this.typewriter = new Typewriter()
	this.typewriter.setFont('Furore') // Change to furoreregular to load from the web

	this.layout = new Layout()

	this.skeleton = new Entity()
	this.skeleton.setSprite('images/screens/vitals/skeleton.png')
				 .setPosition(this.layout.padding * 2 + this.layout.block.half.width / 2, this.layout.padding + this.layout.block.title.height)
				 .setSize(89, 206)
				 .setAnchor(36, 0)

	this.bodyTemperature = {
		x: l.room.width - this.layout.padding - this.layout.block.half.width,
		y: this.layout.padding,
		width: this.layout.block.half.width,
		height: this.layout.block.half.height,
		color: green
	}

	this.bloodPressure = {
		x: l.room.width - this.layout.padding - this.layout.block.half.width,
		y: this.layout.padding + this.layout.block.title.height + this.layout.padding + this.layout.block.half.height,
		width: this.layout.block.half.width,
		height: this.layout.block.half.height,
		color: green
	}

	this.heartRate = {
		x: this.layout.padding,
		y: this.layout.padding * 3 + (this.layout.block.title.height) * 2 + this.layout.block.half.height * 2,
		width: this.layout.block.full.width,
		height: this.layout.block.full.height,
		color: green
	}

	this.respiratoryRate = {
		x: this.layout.padding,
		y: this.layout.padding * 4 + (this.layout.block.title.height) * 3 + this.layout.block.half.height * 2 + this.layout.block.full.height,
		width: this.layout.block.full.width,
		height: this.layout.block.full.height,
		color: green
	}

	this.capnometer = new Capnometer()
	this.cardiogram = new Cardiogram()

	this.draw = function(player)
	{
		// Skeleton
		self.skeleton.draw()

		// Body temperature
		self.layout.block.draw('temperature', Math.round(player.temperature.value * 10) / 10 + ' F', self.bodyTemperature)

		// Blood pressure
		self.layout.block.draw('blood pressure', '', self.bloodPressure)
		self.typewriter.setAlignment('center').setColor(game.color).setSize(self.layout.block.content.fontSize).setPosition(self.bloodPressure.x + self.bloodPressure.width / 5, self.bloodPressure.y + self.bloodPressure.height / 3 + self.bloodPressure.height / 18).write(Math.round(player.bloodPressure.top))
		self.pencil.setColor(game.color).setPosition(self.bloodPressure.x + self.bloodPressure.width / 16, self.bloodPressure.y + self.layout.block.title.height + self.bloodPressure.height / 2.35 + self.bloodPressure.height / 18).setSize(self.bloodPressure.width / 3.5, 2).fillRectangle()
		self.typewriter.setAlignment('center').setColor(game.color).setSize(self.layout.block.content.fontSize).setPosition(self.bloodPressure.x + self.bloodPressure.width / 5, self.bloodPressure.y + self.bloodPressure.height / 3 * 2 + self.bloodPressure.height / 18).write(Math.round(player.bloodPressure.bottom))
		self.typewriter.setAlignment('left').setColor(game.color).setSize(self.layout.block.content.fontSize).setPosition(self.bloodPressure.x + self.bloodPressure.width / 5 * 2, self.bloodPressure.y + self.bloodPressure.height / 2 + self.bloodPressure.height / 18).write('mm hg')

		// Heart rate
		self.layout.block.draw('heart rate', '', self.heartRate, Math.round(player.heart.rate) + ' beats per minute')
		self.cardiogram.draw(self.heartRate.x, self.heartRate.y + self.layout.block.title.height, self.heartRate.width, self.heartRate.height)

		// Respiratory rate
		self.layout.block.draw('respiratory rate', '', self.respiratoryRate, Math.round(player.breathing.rate) + ' breaths per minute')
		self.capnometer.draw(self.respiratoryRate.x, self.respiratoryRate.y + self.layout.block.title.height, self.respiratoryRate.width, self.respiratoryRate.height)

		return self
	}
}