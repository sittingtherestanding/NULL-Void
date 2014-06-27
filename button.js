var Button = function()
{
	var self = this // For timers

	this.pencil = new Pencil()
	this.typewriter = new Typewriter()
	this.typewriter.setAlignment('center')

	this.ready = true
	this.bound = {x: 0, y: 0, width: 0, height: 0} // For click and tap checking

	this.string = 'button'
	this.state = 'resting'
	this.progress = 0
	this.normalColor = '#111111'
	this.successColor = '#2ECC40'

	this.click = function(code)
	{
		this.ready = false
		this.state = 'clicked'
		this.onFinish = code

		return this
	}

	this.setPosition = function(x, y)
	{
		this.x = x
		this.y = y

		this.updateBound()

		return this
	}

	this.setSize = function(width, height)
	{
		this.width = width
		this.height = height

		this.radius = this.height / 2
		this.pencil.setRadius(this.radius)

		this.initMiddle = this.width - this.radius * 2
		this.middle = this.initMiddle

		this.updateBound()

		return this
	}

		this.updateBound = function()
		{
			if (this.width && this.height)
			{
				this.bound.width = this.width
				this.bound.height = this.height
			}

			if (this.x && this.y)
			{
				this.bound.x = this.x - this.bound.width
				this.bound.y = this.y
			}
		}

	this.setStroke = function(stroke)
	{
		this.stroke = stroke
		this.pencil.setStroke(stroke)

		return this
	}

	this.setNormalColor = function(color)
	{
		this.normalColor = color

		return this
	}

	this.setSuccessColor = function(color)
	{
		this.successColor = color

		return this
	}

	this.setPauseTime = function(time, finalTime)
	{
		this.pauseTime = time

		if (finalTime)
		{
			this.finalPauseTime = finalTime
		}
		else
		{
			this.finalPauseTime = this.pauseTime
		}

		return this
	}

	this.setScaleTime = function(time)
	{
		this.scaleSpeed = this.middle / (60 * (time / 1000))

		return this
	}

	this.setCompletionTime = function(time)
	{
		this.progressSpeed = 100 / (60 * (time / 1000))

		return this
	}

	this.setString = function(string, finalString)
	{
		this.string = string

		if (finalString)
		{
			this.finalString = finalString
		}
		else
		{
			this.finalString = this.string
		}

		return this
	}

	this.setFont = function(font)
	{
		this.typewriter.setFont(font)

		return this
	}

	this.setFontSize = function(size)
	{
		this.typewriter.setSize(size)

		return this
	}

	this.draw = function()
	{
		if (this.state == 'resting')
		{
			this.pencil.setColor(this.normalColor)
			this.pencil.setPosition(this.x - this.middle - this.radius, this.y - this.stroke / 2).setSize(this.middle, this.stroke).fillRectangle() // Top middle
			this.pencil.setPosition(this.x - this.middle - this.radius, this.y + this.radius * 2 - this.stroke / 2).setSize(this.middle, this.stroke).fillRectangle() // Bottom middle
			this.pencil.setPosition(this.x - this.middle - this.radius, this.y + this.radius).setArc(90, 270).strokeArc() // Left side
			this.pencil.setPosition(this.x - this.radius, this.y + this.radius).setArc(270, 90).strokeArc() // Right side

			this.typewriter.setColor(this.normalColor).setPosition(this.x - this.middle / 2 - this.radius, this.y).write(this.string)
		}
		else if (this.state == 'clicked')
		{
			if (this.middle > 0)
			{
				if (this.middle - this.scaleSpeed > 0)
				{
					this.middle -= this.scaleSpeed
				}
				else
				{
					this.middle = 0
				}
			}
			else
			{
				if (!this.timer)
				{
					this.timer = setTimeout(function()
					{
						self.state = 'pie'
						self.timer = null
					}, this.pauseTime)
				}
			}

			this.pencil.setColor(this.normalColor)
			this.pencil.setPosition(this.x - this.middle - this.radius, this.y - this.stroke / 2).setSize(this.middle, this.radius * 2 + this.stroke).fillRectangle() // Middle
			this.pencil.setPosition(this.x - this.middle - this.radius, this.y + this.radius).setArc(90, 270).fillArc().strokeArc() // Left side
			this.pencil.setPosition(this.x - this.radius, this.y + this.radius).setArc(270, 90).fillArc().strokeArc() // Right side
		}
		else if (this.state == 'pie')
		{
			if (this.progress < 100)
			{
				if (this.progress + this.progressSpeed < 100)
				{
					this.progress += this.progressSpeed
				}
				else
				{
					this.progress = 100
				}
			}
			else
			{
				eval(this.onFinish)
				this.onFinish = null

				if (!this.timer)
				{
					this.timer = setTimeout(function()
					{
						self.state = 'restoring'
						self.timer = null
					}, this.pauseTime)
				}
			}

			this.pencil.setPosition(this.x - this.radius, this.y + this.radius).setColor(this.normalColor).fillCircle()
			this.pencil.setPosition(this.x - this.radius, this.y + this.radius).setColor(this.successColor).fillPie(this.progress).setColor(this.normalColor).strokeCircle()
		}
		else if (this.state == 'restoring')
		{
			if (this.middle < this.initMiddle)
			{
				if (this.middle + this.scaleSpeed < this.initMiddle)
				{
					this.middle += this.scaleSpeed
				}
				else
				{
					this.middle = this.initMiddle
				}
			}
			else
			{
				if (!this.timer)
				{
					this.timer = setTimeout(function()
					{
						self.progress = 0
						self.ready = true
						self.state = 'resting'
						self.timer = null
					}, this.finalPauseTime)
				}
			}

			this.pencil.setColor(this.successColor)
			this.pencil.setPosition(this.x - this.middle - this.radius, this.y - this.stroke / 2).setSize(this.middle, this.radius * 2 + this.stroke).fillRectangle() // Middle
			this.pencil.setPosition(this.x - this.middle - this.radius, this.y + this.radius).setArc(90, 270).fillArc() // Left side
			this.pencil.setPosition(this.x - this.radius, this.y + this.radius).setArc(270, 90).fillArc() // Right side

			this.pencil.setColor(this.normalColor)
			this.pencil.setPosition(this.x - this.middle - this.radius, this.y - this.stroke / 2).setSize(this.middle, this.stroke).fillRectangle() // Top middle
			this.pencil.setPosition(this.x - this.middle - this.radius, this.y + this.radius * 2 - this.stroke / 2).setSize(this.middle, this.stroke).fillRectangle() // Bottom middle
			this.pencil.setPosition(this.x - this.middle - this.radius, this.y + this.radius).setArc(90, 270).strokeArc() // Left side
			this.pencil.setPosition(this.x - this.radius, this.y + this.radius).setArc(270, 90).strokeArc() // Right side

			this.typewriter.setColor(this.normalColor).setPosition(this.x - this.middle / 2 - this.radius, this.y).write(this.finalString)
		}
	}
}