this.Layout = function()
{
    var self = this

    this.pencil = new Pencil()
    this.typewriter = new Typewriter()

    this.environment = new Environment()

    // UI values
    this.padding = 12

    this.navigation = {
        fontSize: Math.round(l.room.width / 25),
        x: this.padding,
        y: l.room.height - this.padding * 5
    }

        this.navigation.vitals = {
            x: this.padding,
            y: this.navigation.y + this.navigation.padding * 2
        }

        this.navigation.conditions = {
            x: l.room.width / 8 * 2.8,
            y: this.navigation.y + this.navigation.padding * 2
        }

        this.navigation.drones = {
            x: l.room.width / 8 * 4.8,
            y: this.navigation.y + this.navigation.padding * 2
        }

        this.navigation.inventory = {
            x: l.room.width - this.padding,
            y: this.navigation.y + this.navigation.padding * 2
        }

    this.block = {
        opacity: 0.75,
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
        self.pencil.setOpacity(self.block.opacity).setColor(self.block.color).setPosition(self.block.x, self.block.y + self.block.title.height).setSize(self.block.width, self.block.height).fillRectangle()
        self.typewriter.setAlignment('left').setOpacity(self.block.opacity).setColor(self.block.color).setSize(self.block.title.fontSize).setPosition(self.block.x, self.block.y).write(title)
        self.typewriter.setAlignment('center').setColor(game.color).setSize(self.block.content.fontSize).setPosition(self.block.x + self.block.width / 2, self.block.y + self.block.height / 2 + self.block.height / 18).write(content)

        if (subtitle)
        {
            self.typewriter.setAlignment('right').setOpacity(self.block.opacity).setColor(self.block.color).setSize(self.block.title.fontSize * 0.75).setPosition(self.block.x + self.block.width, self.block.y + self.block.title.fontSize * 0.25).write(subtitle)
        }

        return self
    }

    this.navigation.draw = function()
    {
        self.pencil.setOpacity(self.block.opacity).setColor(green).setPosition(self.padding, self.navigation.y).setSize(l.room.width - self.padding * 2, 2).fillRectangle()
        
        if (self.environment.time.value < 100)
        {
            self.environment.time.value += 0.01
        }
        else
        {
            self.environment.time.value = 0
        }

        // Reposition the sun to show time
        self.sun.x = self.padding + (l.room.width - self.padding * 2) / 100 * self.environment.time.value

        self.sun.draw()

        self.typewriter.setSize(self.navigation.fontSize)

        if (player.temperature.warning || player.bloodPressure.warning || player.heart.warning || player.breathing.warning)
        {
            self.typewriter.setColor(red)
        }
        else
        {
            self.typewriter.setColor(green)
        }

        self.typewriter.setAlignment('left').setOpacity(self.block.opacity).setPosition(self.navigation.vitals.x, self.navigation.vitals.y).write('vitals')

        self.typewriter.setColor(green)
        self.typewriter.setAlignment('center').setOpacity(self.block.opacity).setPosition(self.navigation.conditions.x, self.navigation.conditions.y).write('conditions')
        self.typewriter.setAlignment('center').setOpacity(self.block.opacity).setPosition(self.navigation.drones.x, self.navigation.drones.y).write('drones')
        self.typewriter.setAlignment('right').setOpacity(self.block.opacity).setPosition(self.navigation.inventory.x, self.navigation.inventory.y).write('inventory')
        
        return self
    }
}