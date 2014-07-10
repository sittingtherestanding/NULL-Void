this.Ambiance = function()
{
	var self = this

	this.pencil = new Pencil()

	this.corners = {
		size: l.room.width / 40
	}

	this.corners.draw = function()
	{
		l.ctx.fillStyle = '#000000'

		// Northwest
		l.ctx.beginPath()
		l.ctx.moveTo(0, 0)
		l.ctx.lineTo(self.corners.size, 0)
		l.ctx.lineTo(0, self.corners.size)
		l.ctx.fill()

		// Northeast
		l.ctx.beginPath()
		l.ctx.moveTo(l.room.width, 0)
		l.ctx.lineTo(l.room.width - self.corners.size, 0)
		l.ctx.lineTo(l.room.width, self.corners.size)
		l.ctx.fill()

		// Southeast
		l.ctx.beginPath()
		l.ctx.moveTo(l.room.width, l.room.height)
		l.ctx.lineTo(l.room.width - self.corners.size, l.room.height)
		l.ctx.lineTo(l.room.width, l.room.height - self.corners.size)
		l.ctx.fill()

		// Southwest
		l.ctx.beginPath()
		l.ctx.moveTo(0, l.room.height)
		l.ctx.lineTo(self.corners.size, l.room.height)
		l.ctx.lineTo(0, l.room.height - self.corners.size)
		l.ctx.fill()

		return self
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