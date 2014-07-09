var Cardiogram = function()
{
    var self = this

    this.pencil = new Pencil()

    this.padding = 0.3
    this.beatIndex = 0
    this.currentX = 0
    this.past = new Date()
    this.beat = [0, 0, -0.16, -0.33, -0.16, 0, 0.33, 0.66, 0.33, 0, -0.5, -1, -0.5, 0, 0.5, 1, 0.5, 0, 0]
    this.history = new Array()

    this.draw = function(x, y, width, height)
    {
        self.y = Math.round(y + height / 2)
        self.heightMod = height / 2 * (1 - self.padding)

        self.present = new Date()

        if (self.present.getTime() - self.past.getTime() > 1000 * 60 / player.heart.rate)
        {
            self.beatIndex = 1 // Start the beat

            self.past = new Date()
        }

        if (self.beatIndex > 0 && self.beatIndex < self.beat.length - 1)
        {
            self.beatIndex++
        }
        else
        {
            self.beatIndex = 0 // Stop the beat
        }

        self.history.push(Math.round(self.beat[self.beatIndex] * self.heightMod))

        self.currentX = 0

        if (self.history.length >= width)
        {
            for (var i = self.history.length - width; i < self.history.length; i++)
            {
                self.pencil.setColor(game.color).setStroke(2).setPosition(x + self.currentX - 1, self.y + self.history[i - 1]).setEndPosition(x + self.currentX, self.y + self.history[i]).strokeLine()

                self.currentX++
            }
        }
        else
        {
            for (var i = 0; i < self.history.length; i++)
            {
                self.pencil.setColor(game.color).setStroke(2).setPosition(x + self.currentX - 1, self.y + self.history[i - 1]).setEndPosition(x + self.currentX, self.y + self.history[i]).strokeLine()

                self.currentX++
            }
        }

        return self
    }
}