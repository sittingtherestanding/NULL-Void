var Conditions = function()
{
    this.pencil = new Pencil()

    this.blocks = new Blocks()
    this.navigation = new Navigation()

    this.temperature = {
        x: padding,
        y: this.navigation.y - (padding + this.blocks.tiny.height + this.blocks.title.height) * 2,
        width: this.blocks.tiny.width,
        height: this.blocks.tiny.height,
        color: colorThree
    }

    this.carbon = {
        x: padding,
        y: this.navigation.y - (padding + this.blocks.tiny.height + this.blocks.title.height),
        width: this.blocks.tiny.width,
        height: this.blocks.tiny.height,
        color: colorThree
    }

    this.radiation = {
        x: l.room.width - padding - this.blocks.tiny.width,
        y: this.navigation.y - (padding + this.blocks.tiny.height + this.blocks.title.height) * 2,
        width: this.blocks.tiny.width,
        height: this.blocks.tiny.height,
        color: colorThree
    }

    this.wind = {
        x: l.room.width - padding - this.blocks.tiny.width,
        y: this.navigation.y - (padding + this.blocks.tiny.height + this.blocks.title.height),
        width: this.blocks.tiny.width,
        height: this.blocks.tiny.height,
        color: colorThree
    }

    this.draw = function()
    {
        map.draw()

        // Draw a border around the map
        this.pencil.setPosition(padding, padding).setColor(colorFour).setStroke(2).setSize(l.dom.width - padding * 2, this.temperature.y - padding * 2).strokeRectangle()

        // Block out map drawing that overflows the alloted space
        this.pencil.setPosition(0, 0).setColor(game.color).setSize(l.dom.width, padding).fillRectangle()
        this.pencil.setPosition(0, 0).setColor(game.color).setSize(padding, l.dom.height).fillRectangle()
        this.pencil.setPosition(l.dom.width - padding, 0).setColor(game.color).setSize(padding, l.dom.height).fillRectangle()
        this.pencil.setPosition(0, this.temperature.y - padding).setColor(game.color).setSize(l.dom.width, l.dom.height - this.temperature.y + padding).fillRectangle()

        this.blocks.draw('temperature', environment.temperature.value, this.temperature)
        this.blocks.draw('c02 levels', environment.carbon.value + ' ppmv', this.carbon)
        this.blocks.draw('radiation', environment.radiation.value + ' msc', this.radiation)
        this.blocks.draw('wind', environment.wind.value + ' mph', this.wind)
    }
}