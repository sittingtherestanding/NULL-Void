this.Ambiance = function()
{
	var self = this

	this.pencil = new Pencil()

	this.rounded = {
		size: 15
	}

	this.rounded.draw = function()
	{
		
		
		return this
	}

	this.scanlines = {
		position: 0
	}

	this.scanlines.draw = function() // Use 'draw' to keep with the syntax of everything else
	{
		var gap = 4
		var opacity = 0.1
		var speed = 0.25
		
		if (self.scanlines.position < gap)
		{
			self.scanlines.position += speed
		}
		else
		{
			self.scanlines.position = 0
		}

		var i = Math.floor(l.room.height / gap)
		while (i--)
		{
			self.pencil.setColor(colorOne).setOpacity(opacity).setPosition(0, i * gap + Math.round(self.scanlines.position)).setEndPosition(l.room.width, i * gap + Math.round(self.scanlines.position)).setStroke(1).strokeLine()
		}

		return self
	}
}