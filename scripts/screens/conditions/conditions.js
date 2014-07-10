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
        middle: this.blocks.tiny.middle,
        color: colorThree
    }

    this.carbon = {
        x: padding,
        y: this.navigation.y - (padding + this.blocks.tiny.height + this.blocks.title.height),
        width: this.blocks.tiny.width,
        height: this.blocks.tiny.height,
        middle: this.blocks.tiny.middle,
        color: colorThree
    }

    this.radiation = {
        x: l.room.width - padding - this.blocks.tiny.width,
        y: this.navigation.y - (padding + this.blocks.tiny.height + this.blocks.title.height) * 2,
        width: this.blocks.tiny.width,
        height: this.blocks.tiny.height,
        middle: this.blocks.tiny.middle,
        color: colorThree
    }

    this.wind = {
        x: l.room.width - padding - this.blocks.tiny.width,
        y: this.navigation.y - (padding + this.blocks.tiny.height + this.blocks.title.height),
        width: this.blocks.tiny.width,
        height: this.blocks.tiny.height,
        middle: this.blocks.tiny.middle,
        color: colorThree
    }

    this.draw = function()
    {
        map.draw()

        this.blocks.draw('temperature', environment.temperature.value, this.temperature)
        this.blocks.draw('c02 levels', environment.carbon.value + ' ppmv', this.carbon)
        this.blocks.draw('radiation', environment.radiation.value + ' msc', this.radiation)
        this.blocks.draw('wind', environment.wind.value + ' mph', this.wind)
    }
}