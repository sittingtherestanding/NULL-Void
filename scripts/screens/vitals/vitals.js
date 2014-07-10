this.Vitals = function()
{
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
		color: tan
	}

	this.bloodPressure = {
		x: l.room.width - this.layout.padding - this.layout.block.half.width,
		y: this.layout.padding + this.layout.block.title.height + this.layout.padding + this.layout.block.half.height,
		width: this.layout.block.half.width,
		height: this.layout.block.half.height,
		color: tan
	}

	this.heartRate = {
		x: this.layout.padding,
		y: this.layout.padding * 3 + (this.layout.block.title.height) * 2 + this.layout.block.half.height * 2,
		width: this.layout.block.full.width,
		height: this.layout.block.full.height,
		color: tan
	}

	this.respiratoryRate = {
		x: this.layout.padding,
		y: this.layout.padding * 4 + (this.layout.block.title.height) * 3 + this.layout.block.half.height * 2 + this.layout.block.full.height,
		width: this.layout.block.full.width,
		height: this.layout.block.full.height,
		color: tan
	}

	this.capnometer = new Capnometer()
	this.cardiogram = new Cardiogram()

	this.draw = function()
	{
		// Skeleton
		this.skeleton.draw()

		// Body temperature
		this.layout.block.draw('temperature', Math.round(player.temperature.value * 10) / 10 + ' F', this.bodyTemperature)

		// Blood pressure
		this.layout.block.draw('blood pressure', '', this.bloodPressure)
		this.typewriter.setAlignment('center').setColor(red).setSize(this.layout.block.content.fontSize).setPosition(this.bloodPressure.x + this.bloodPressure.width / 5, this.bloodPressure.y + this.bloodPressure.height / 3 + this.bloodPressure.height / 18).write(Math.round(player.bloodPressure.top))
		this.pencil.setColor(red).setPosition(this.bloodPressure.x + this.bloodPressure.width / 16, this.bloodPressure.y + this.layout.block.title.height + this.bloodPressure.height / 2.35 + this.bloodPressure.height / 18).setSize(this.bloodPressure.width / 3.5, 2).fillRectangle()
		this.typewriter.setAlignment('center').setColor(red).setSize(this.layout.block.content.fontSize).setPosition(this.bloodPressure.x + this.bloodPressure.width / 5, this.bloodPressure.y + this.bloodPressure.height / 3 * 2 + this.bloodPressure.height / 18).write(Math.round(player.bloodPressure.bottom))
		this.typewriter.setAlignment('left').setColor(red).setSize(this.layout.block.content.fontSize).setPosition(this.bloodPressure.x + this.bloodPressure.width / 5 * 2, this.bloodPressure.y + this.bloodPressure.height / 2 + this.bloodPressure.height / 18).write('mm hg')

		// Heart rate
		this.layout.block.draw('heart rate', '', this.heartRate, Math.round(player.heart.rate) + ' beats per minute')
		this.cardiogram.draw(this.heartRate.x, this.heartRate.y + this.layout.block.title.height, this.heartRate.width, this.heartRate.height)

		// Respiratory rate
		this.layout.block.draw('respiratory rate', '', this.respiratoryRate, Math.round(player.breathing.rate) + ' breaths per minute')
		this.capnometer.draw(this.respiratoryRate.x, this.respiratoryRate.y + this.layout.block.title.height, this.respiratoryRate.width, this.respiratoryRate.height)

		return this
	}
}