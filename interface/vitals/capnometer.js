this.Capnometer = function()
{
    this.history = new Array()

    this.period = 125
    this.amplitude = 20
    this.counter = 0

    this.draw = function(x, y, width, height)
    {
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