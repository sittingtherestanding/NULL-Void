this.Layout = function()
{
    var self = this

    this.pencil = new Pencil()
    this.typewriter = new Typewriter()
    this.typewriter.setFont('Furore') // Change to furoreregular to load from the web

    // UI values
    this.padding = 12

    this.navigation = {
        fontSize: Math.round(l.room.width / 25),
        x: this.padding,
        y: l.room.height - this.padding * 5
    }

        this.navigation.vitals = {
            x: this.padding,
            y: this.navigation.y + this.padding * 1.75
        }

        this.navigation.conditions = {
            x: l.room.width / 8 * 2.8,
            y: this.navigation.y + this.padding * 1.75
        }

        this.navigation.drones = {
            x: l.room.width / 8 * 4.8,
            y: this.navigation.y + this.padding * 1.75
        }

        this.navigation.inventory = {
            x: l.room.width - this.padding,
            y: this.navigation.y + this.padding * 1.75
        }

    this.block = {
        opacity: 0.85,
        title: {
            fontSize: Math.round(l.room.width / 25),
            padding: 5
        },
        content: {
            fontSize: Math.round(l.room.width / 17),
            padding: 5
        }
    }
        
        this.block.title.height = this.block.title.fontSize + this.block.title.padding

        this.block.tiny = {
            width: l.room.width / 2 - this.padding * 1.5,
            height: ((this.navigation.y - (this.padding * 5) - ((this.block.title.height) * 4)) / 4) / 2
        }

        this.block.half = {
            width: l.room.width / 2 - this.padding * 3,
            height: (this.navigation.y - (this.padding * 5) - ((this.block.title.height) * 4)) / 4
        }

        this.block.full = {
            width: l.room.width - this.padding * 2,
            height: (this.navigation.y - (this.padding * 5) - ((this.block.title.height) * 4)) / 4
        }

    this.sun = new Entity()
    this.sun.setSprite('images/screens/conditions/sun.png')
                .setPosition(this.padding, this.navigation.y)
                .setSize(25, 25)
                .setAnchor(12, 12)

    this.block.draw = function(title, content, block, subtitle)
    {
        self.pencil.setOpacity(self.block.opacity).setColor(block.color).setPosition(block.x, block.y + self.block.title.height).setSize(block.width, block.height).fillRectangle()
        self.typewriter.setAlignment('left').setOpacity(1).setColor(gray).setSize(self.block.title.fontSize).setPosition(block.x, block.y).write(title)
        self.typewriter.setAlignment('center').setColor(red).setSize(self.block.content.fontSize).setPosition(block.x + block.width / 2, block.y + block.height / 2 + block.height / 18).write(content)

        if (subtitle)
        {
            self.typewriter.setAlignment('right').setOpacity(block.opacity).setColor(gray).setSize(self.block.title.fontSize * 0.75).setPosition(block.x + block.width, block.y + self.block.title.fontSize * 0.25).write(subtitle)
        }

        return self
    }

    this.navigation.draw = function()
    {
        self.pencil.setOpacity(self.block.opacity).setColor(gray).setPosition(self.padding, self.navigation.y).setSize(l.room.width - self.padding * 2, 2).fillRectangle()
        
        /*
        if (daylight < 100)
        {
            daylight += 0.01
        }
        else
        {
            daylight = 0
        }

        // Reposition the sun to show time
        self.sun.x = self.padding * 1.5 + (l.room.width - self.padding * 3) / 100 * daylight

        self.sun.draw()
        */

        self.typewriter.setSize(self.navigation.fontSize)

        if (player.temperature.warning || player.bloodPressure.warning || player.heart.warning || player.breathing.warning)
        {
            self.typewriter.setColor(orange)
        }
        else
        {
            self.typewriter.setColor(tan)
        }

        self.typewriter.setAlignment('left').setOpacity(self.block.opacity).setPosition(self.navigation.vitals.x, self.navigation.vitals.y).write('vitals')

        self.typewriter.setColor(tan)
        self.typewriter.setAlignment('center').setOpacity(self.block.opacity).setPosition(self.navigation.conditions.x, self.navigation.conditions.y).write('conditions')
        self.typewriter.setAlignment('center').setOpacity(self.block.opacity).setPosition(self.navigation.drones.x, self.navigation.drones.y).write('drones')
        self.typewriter.setAlignment('right').setOpacity(self.block.opacity).setPosition(self.navigation.inventory.x, self.navigation.inventory.y).write('inventory')
        
        return self
    }
}