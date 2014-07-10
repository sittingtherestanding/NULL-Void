this.Ambiance = function()
{
	var self = this

	this.pencil = new Pencil()
	this.tool = new Tool()

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
	}

	this.ice = new Entity()
	this.ice.setSprite('images/ambiance/ice.jpg')
			.setPosition(0, 0)
			.setOpacity(0)

	this.freezing = new Object()
	this.freezing.draw = function()
	{
		if (self.ice.opacity < 0.5)
		{
			self.ice.opacity += 0.0005
		}

		self.ice.setStretch(l.room.width, l.room.height).draw()
	}

	this.flakes = new Group()
	this.xPadding = 50
	this.stretchModifier = 40

	this.snow = new Object()
	this.snow.draw = function()
	{
		if (Math.round(self.tool.random(0, 2)) == 0)
		{
			var flake = new Entity()
				var random = Math.round(self.tool.random(1, 4))

				if (random == 1)
				{
					flake.setSprite('images/ambiance/flake_1.png')
				}
				else if (random == 2)
				{
					flake.setSprite('images/ambiance/flake_2.png')
				}
				else if (random == 3)
				{
					flake.setSprite('images/ambiance/flake_3.png')
				}
				else if (random == 4)
				{
					flake.setSprite('images/ambiance/flake_4.png')
				}			

				flake.setOpacity(self.tool.random(0.3, 0.9))
					 .setStretch(self.tool.random(55 - self.stretchModifier, 55 + self.stretchModifier), self.tool.random(55 - self.stretchModifier, 55 + self.stretchModifier))
					 .setPosition(self.tool.random(-self.xPadding, l.room.width + self.xPadding), -self.xPadding)
					 .setSize(55, 55)
					 .setAnchor(28, 28)
					 .setFriction(0)
					 .pushVertical(self.tool.random(3, 6))
					 .pushHorizontal(self.tool.random(-2, 2))
					 .spin(self.tool.random(0.5, 2))
			self.flakes.add(flake)
		}

		self.flakes.applyPhysics().draw()
	}
}