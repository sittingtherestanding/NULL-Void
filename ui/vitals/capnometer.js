this.Capnometer = function()
{
	this.history = new Array()
	this.counter = 0
	this.padding = 0.3

	this.draw = function(x, y, width, height)
	{
		this.period = 1000 / player.breathing.rate * 2
		this.amplitude = height / 2 * (1 - this.padding) * player.breathing.deepness

		this.y = -this.amplitude * Math.sin(this.counter)
		this.counter += Math.PI / this.period

		this.history.push(this.y)

		this.currentX = 0

		if (this.history.length >= width)
		{
			for (var i = this.history.length - width; i < this.history.length; i++)
			{
				l.ctx.beginPath()
				l.ctx.moveTo(x + this.currentX - 1, y + height / 2 + this.history[i - 1])
				l.ctx.lineTo(x + this.currentX, y + height / 2 + this.history[i])
				l.ctx.lineWidth = 2
				l.ctx.strokeStyle = game.color
				l.ctx.stroke()

				this.currentX++
			}
		}
		else
		{
			for (var i = 0; i < this.history.length; i++)
			{
				l.ctx.beginPath()
				l.ctx.moveTo(x + this.currentX - 1, y + height / 2 + this.history[i - 1])
				l.ctx.lineTo(x + this.currentX, y + height / 2 + this.history[i])
				l.ctx.lineWidth = 2
				l.ctx.strokeStyle = game.color
				l.ctx.stroke()

				this.currentX++
			}
		}
	}
}