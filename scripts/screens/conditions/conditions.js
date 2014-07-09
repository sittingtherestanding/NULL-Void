var Conditions = function()
{
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
        pencil.setOpacity(this.layout.block.opacity).setPosition(this.layout.padding, this.layout.padding).setColor(green).setStroke(2).setSize(l.dom.width - this.layout.padding * 2, this.temperature.y - this.layout.padding * 2).strokeRectangle()

        // Block out map drawing that overflows the alloted space
        pencil.setPosition(0, 0).setColor(game.color).setSize(l.dom.width, this.layout.padding).fillRectangle()
        pencil.setPosition(0, 0).setColor(game.color).setSize(this.layout.padding, l.dom.height).fillRectangle()
        pencil.setPosition(l.dom.width - this.layout.padding, 0).setColor(game.color).setSize(this.layout.padding, l.dom.height).fillRectangle()
        pencil.setPosition(0, this.temperature.y - this.layout.padding).setColor(game.color).setSize(l.dom.width, l.dom.height - this.temperature.y + this.layout.padding).fillRectangle()

        this.layout.block.draw('temperature', this.temperature.value, this.temperature)
        this.layout.block.draw('c02 levels', this.carbon.value + ' ppmv', this.carbon)
        this.layout.block.draw('radiation', this.radiation.value + ' msc', this.radiation)
        this.layout.block.draw('wind', this.wind.value + ' mph', this.wind)

        drawNavigation()
    }
}