this.Vitals = function()
{
	this.pencil = new Pencil()
	this.typewriter = new Typewriter()
	this.typewriter.setFont('bioliquid') // Change to furoreregular to load from the web

	this.blocks = new Blocks()

	this.skeleton = new Entity()
	this.skeleton.setSprite('images/screens/vitals/skeleton.png')
				 .setPosition(padding * 2 + this.blocks.half.width / 2, padding + this.blocks.title.height)
				 .setSize(89, 206)
				 .setAnchor(36, 0)

	this.bodyTemperature = {
		x: l.room.width - padding - this.blocks.half.width,
		y: padding,
		width: this.blocks.half.width,
		height: this.blocks.half.height,
		middle: this.blocks.half.middle,
		color: colorThree
	}

	this.bloodPressure = {
		x: l.room.width - padding - this.blocks.half.width,
		y: padding + this.blocks.title.height + padding + this.blocks.half.height,
		width: this.blocks.half.width,
		height: this.blocks.half.height,
		middle: this.blocks.half.middle,
		color: colorThree
	}

	this.heartRate = {
		x: padding,
		y: padding * 3 + (this.blocks.title.height) * 2 + this.blocks.half.height * 2,
		width: this.blocks.full.width,
		height: this.blocks.full.height,
		middle: this.blocks.full.middle,
		color: colorThree
	}

	this.respiratoryRate = {
		x: padding,
		y: padding * 4 + (this.blocks.title.height) * 3 + this.blocks.half.height * 2 + this.blocks.full.height,
		width: this.blocks.full.width,
		height: this.blocks.full.height,
		middle: this.blocks.full.middle,
		color: colorThree
	}

	this.capnometer = new Capnometer()
	this.cardiogram = new Cardiogram()

	this.draw = function()
	{
		// Skeleton
		this.skeleton.draw()

		// Body temperature
		this.blocks.draw('temperature', Math.round(player.temperature.value * 10) / 10 + ' F', this.bodyTemperature)

		// Blood pressure
		this.blocks.draw('blood pressure', '', this.bloodPressure)
		this.typewriter.setAlignment('center').setColor(colorOne).setSize(this.blocks.content.fontSize).setPosition(this.bloodPressure.x + this.bloodPressure.width / 4, this.bloodPressure.y + this.bloodPressure.height / 3 + this.bloodPressure.height / 18).write(Math.round(player.bloodPressure.top))
		this.pencil.setColor(colorOne).setPosition(this.bloodPressure.x + this.bloodPressure.width / 9, this.bloodPressure.y + this.blocks.title.height + this.bloodPressure.height / 2.35 + this.bloodPressure.height / 18).setSize(this.bloodPressure.width / 3.5, 2).fillRectangle()
		this.typewriter.setAlignment('center').setColor(colorOne).setSize(this.blocks.content.fontSize).setPosition(this.bloodPressure.x + this.bloodPressure.width / 4, this.bloodPressure.y + this.bloodPressure.height / 3 * 2 + this.bloodPressure.height / 18).write(Math.round(player.bloodPressure.bottom))
		this.typewriter.setAlignment('left').setColor(colorOne).setSize(this.blocks.content.fontSize).setPosition(this.bloodPressure.x + this.bloodPressure.width / 4 * 2, this.bloodPressure.y + this.bloodPressure.height / 2 + this.bloodPressure.height / 18).write('mm hg')

		// Heart rate
		this.blocks.draw('heart rate', '', this.heartRate, Math.round(player.heart.rate) + ' beats per minute')
		this.cardiogram.draw(this.heartRate.x, this.heartRate.y + this.blocks.title.height, this.heartRate.width, this.heartRate.height)

		// Respiratory rate
		this.blocks.draw('respiratory rate', '', this.respiratoryRate, Math.round(player.breathing.rate) + ' breaths per minute')
		this.capnometer.draw(this.respiratoryRate.x, this.respiratoryRate.y + this.blocks.title.height, this.respiratoryRate.width, this.respiratoryRate.height)
	}
}