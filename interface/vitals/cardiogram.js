this.Cardiogram = function()
{
    this.padding = 0.3
    this.beatIndex = 0
    this.currentX = 0
    this.past = new Date()
    this.beat = [0, 0, -0.16, -0.33, -0.16, 0, 0.33, 0.66, 0.33, 0, -0.5, -1, -0.5, 0, 0.5, 1, 0.5, 0, 0]
    this.history = new Array()

    this.draw = function(x, y, width, height)
    {
        this.y = Math.round(y + height / 2)
        this.heightMod = height / 2 * (1 - this.padding)

        if (this.history.length == 0)
        {
            for (var i = 0; i < width; i++)
            {
                this.history.push(0)
            }
        }

        this.present = new Date()

        if (this.present.getTime() - this.past.getTime() > 1000 * 60 / player.heartRate)
        {
            this.beatIndex = 1 // Start the beat

            this.past = new Date()
        }

        if (this.beatIndex > 0 && this.beatIndex < this.beat.length - 1)
        {
            this.beatIndex++
        }
        else
        {
            this.beatIndex = 0 // Stop the beat
        }

        this.history.push(Math.round(this.beat[this.beatIndex] * this.heightMod))

        this.currentX = 0

        for (var j = this.history.length - width; j < this.history.length; j++)
        {
            l.ctx.beginPath()
            l.ctx.moveTo(x + this.currentX - 1, this.y + this.history[j - 1])
            l.ctx.lineTo(x + this.currentX, this.y + this.history[j])
            l.ctx.lineWidth = 2
            l.ctx.strokeStyle = game.color
            l.ctx.stroke()

            this.currentX++
        }
    }
}