var Capnometer = function()
{
	var self = this

	this.pencil = new Pencil()

	this.history = new Array()
	this.counter = 0
	this.padding = 0.3

	this.draw = function(x, y, width, height)
	{
		self.period = 1000 / player.breathing.rate * 2
		self.amplitude = height / 2 * (1 - self.padding) * player.breathing.deepness

		self.y = -self.amplitude * Math.sin(self.counter)
		self.counter += Math.PI / self.period

		self.history.push(self.y)

		self.currentX = 0

		if (self.history.length >= width)
		{
			for (var i = self.history.length - width; i < self.history.length; i++)
			{
				self.pencil.setStroke(2).setColor(game.color).setPosition(x + self.currentX - 1, y + height / 2 + self.history[i - 1]).setEndPosition(x + self.currentX, y + height / 2 + self.history[i]).strokeLine()

				self.currentX++
			}
		}
		else
		{
			for (var i = 0; i < self.history.length; i++)
			{
				self.pencil.setStroke(2).setColor(game.color).setPosition(x + self.currentX - 1, y + height / 2 + self.history[i - 1]).setEndPosition(x + self.currentX, y + height / 2 + self.history[i]).strokeLine()

				self.currentX++
			}
		}

		return self
	}
}