var Conditions = function()
{
    var self = this

    this.pencil = new Pencil()

    this.layout = new Layout()

    this.temperature = {
        x: this.layout.padding,
        y: this.layout.navigation.y - (this.layout.padding * 1.5 + this.layout.block.tiny.height + this.layout.block.title.height) * 2,
        width: this.layout.block.tiny.width,
        height: this.layout.block.tiny.height,
        color: green
    }

    this.carbon = {
        x: this.layout.padding,
        y: this.layout.navigation.y - (this.layout.padding * 1.5 + this.layout.block.tiny.height + this.layout.block.title.height),
        width: this.layout.block.tiny.width,
        height: this.layout.block.tiny.height,
        color: green
    }

    this.radiation = {
        x: l.room.width - this.layout.padding - this.layout.block.tiny.width,
        y: this.layout.navigation.y - (this.layout.padding * 1.5 + this.layout.block.tiny.height + this.layout.block.title.height) * 2,
        width: this.layout.block.tiny.width,
        height: this.layout.block.tiny.height,
        color: green
    }

    this.wind = {
        x: l.room.width - this.layout.padding - this.layout.block.tiny.width,
        y: this.layout.navigation.y - (this.layout.padding * 1.5 + this.layout.block.tiny.height + this.layout.block.title.height),
        width: this.layout.block.tiny.width,
        height: this.layout.block.tiny.height,
        color: green
    }

    this.draw = function()
    {
        map.draw()

        // Draw a border around the map
        self.pencil.setOpacity(self.layout.block.opacity).setPosition(self.layout.padding, self.layout.padding).setColor(green).setStroke(2).setSize(l.dom.width - self.layout.padding * 2, self.temperature.y - self.layout.padding * 2).strokeRectangle()

        // Block out map drawing that overflows the alloted space
        self.pencil.setPosition(0, 0).setColor(game.color).setSize(l.dom.width, self.layout.padding).fillRectangle()
        self.pencil.setPosition(0, 0).setColor(game.color).setSize(self.layout.padding, l.dom.height).fillRectangle()
        self.pencil.setPosition(l.dom.width - self.layout.padding, 0).setColor(game.color).setSize(self.layout.padding, l.dom.height).fillRectangle()
        self.pencil.setPosition(0, self.temperature.y - self.layout.padding).setColor(game.color).setSize(l.dom.width, l.dom.height - self.temperature.y + self.layout.padding).fillRectangle()

        self.layout.block.draw('temperature', self.temperature.value, self.temperature)
        self.layout.block.draw('c02 levels', self.carbon.value + ' ppmv', self.carbon)
        self.layout.block.draw('radiation', self.radiation.value + ' msc', self.radiation)
        self.layout.block.draw('wind', self.wind.value + ' mph', self.wind)
    }
}