var Cardiogram = function()
{
    this.pencil = new Pencil()

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

        this.present = new Date()

        if (this.present.getTime() - this.past.getTime() > 1000 * 60 / player.heart.rate)
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

        if (this.history.length >= width)
        {
            for (var i = this.history.length - width; i < this.history.length; i++)
            {
                this.pencil.setColor(game.color).setStroke(2).setPosition(x + this.currentX - 1, this.y + this.history[i - 1]).setEndPosition(x + this.currentX, this.y + this.history[i]).strokeLine()

                this.currentX++
            }
        }
        else
        {
            for (var i = 0; i < this.history.length; i++)
            {
                this.pencil.setColor(game.color).setStroke(2).setPosition(x + this.currentX - 1, this.y + this.history[i - 1]).setEndPosition(x + this.currentX, this.y + this.history[i]).strokeLine()

                this.currentX++
            }
        }
    }
}