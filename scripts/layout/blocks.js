var Blocks = function()
{
    this.pencil = new Pencil()
    this.typewriter = new Typewriter()
    this.typewriter.setFont('bioliquid') // Change to furoreregular to load from the web

    this.title = {
        fontSize: Math.round(l.room.width / 20),
        padding: 5
    }

    this.content = {
        fontSize: Math.round(l.room.width / 15),
        padding: 5
    }
        
        this.title.height = this.title.fontSize + this.title.padding

        this.tiny = {
            width: l.room.width / 2 - padding * 1.5,
            height: ((bottom - (padding * 5) - ((this.title.height) * 4)) / 4) / 2
        }

            this.tiny.middle = this.tiny.height / 2 + this.tiny.height / 7

        this.half = {
            width: l.room.width / 2 - padding * 3,
            height: (bottom - (padding * 5) - ((this.title.height) * 4)) / 4
        }

            this.half.middle = this.half.height / 2 + this.half.height / 16

        this.full = {
            width: l.room.width - padding * 2,
            height: (bottom - (padding * 5) - ((this.title.height) * 4)) / 4
        }

            this.full.middle = this.full.height / 2 + this.full.height / 16

    this.draw = function(title, content, block, subtitle)
    {
        this.pencil.setColor(block.color).setPosition(block.x, block.y + this.title.height).setSize(block.width, block.height).setStroke(2).strokeRectangle()
        this.typewriter.setAlignment('left').setColor(colorFour).setSize(this.title.fontSize).setPosition(block.x, block.y).write(title)
        this.typewriter.setAlignment('center').setColor(colorOne).setSize(this.content.fontSize).setPosition(block.x + block.width / 2, block.y + block.middle).write(content)

        if (subtitle)
        {
            this.typewriter.setAlignment('right').setColor(colorFour).setSize(this.title.fontSize * 0.75).setPosition(block.x + block.width, block.y + this.title.fontSize * 0.25).write(subtitle)
        }
    }
}