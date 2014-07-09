var pencil = new Pencil()

// UI colors
var green = '#ccffcc'
var red = '#ff6666'

// UI values
var uiPadding = 12

var uiNavigation = {
    fontSize: Math.round(l.room.width / 25),
    position: {
        x: uiPadding,
        y: l.room.height - uiPadding * 5
    },
    buttons: {
        padding: 10
    }
}

    uiNavigation.buttons.vitals = {
        x: uiPadding,
        y: uiNavigation.position.y + uiNavigation.buttons.padding * 2
    }
    uiNavigation.buttons.conditions = {
        x: l.room.width / 8 * 2.8,
        y: uiNavigation.position.y + uiNavigation.buttons.padding * 2
    }
    uiNavigation.buttons.drones = {
        x: l.room.width / 8 * 4.8,
        y: uiNavigation.position.y + uiNavigation.buttons.padding * 2
    }
    uiNavigation.buttons.inventory = {
        x: l.room.width - uiPadding,
        y: uiNavigation.position.y + uiNavigation.buttons.padding * 2
    }

var uiBlock = {
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
    
    uiBlock.title.height = uiBlock.title.fontSize + uiBlock.title.padding

    uiBlock.tiny = {
        width: l.room.width / 2 - uiPadding * 1.5,
        height: ((uiNavigation.position.y - (uiPadding * 5) - ((uiBlock.title.height) * 4)) / 4) / 2
    }

    uiBlock.half = {
        width: l.room.width / 2 - uiPadding * 3,
        height: (uiNavigation.position.y - (uiPadding * 5) - ((uiBlock.title.height) * 4)) / 4
    }

    uiBlock.full = {
        width: l.room.width - uiPadding * 2,
        height: (uiNavigation.position.y - (uiPadding * 5) - ((uiBlock.title.height) * 4)) / 4
    }

var timeSun = new Entity()
    timeSun.setSprite('images/screens/conditions/sun.png')
           .setPosition(uiPadding, uiNavigation.position.y)
           .setSize(25, 25)
           .setAnchor(12, 12)

var drawBlock = function(title, content, block, subtitle)
{
    pencil.setOpacity(uiBlock.opacity).setColor(block.color).setPosition(block.x, block.y + uiBlock.title.height).setSize(block.width, block.height).fillRectangle()
    typewriter.setAlignment('left').setOpacity(uiBlock.opacity).setColor(block.color).setSize(uiBlock.title.fontSize).setPosition(block.x, block.y).write(title)
    typewriter.setAlignment('center').setColor(game.color).setSize(uiBlock.content.fontSize).setPosition(block.x + block.width / 2, block.y + block.height / 2 + block.height / 18).write(content)

    if (subtitle)
    {
        typewriter.setAlignment('right').setOpacity(uiBlock.opacity).setColor(block.color).setSize(uiBlock.title.fontSize * 0.75).setPosition(block.x + block.width, block.y + uiBlock.title.fontSize * 0.25).write(subtitle)
    }
}

var drawNavigation = function()
{
    pencil.setOpacity(uiBlock.opacity).setColor(green).setPosition(uiPadding, uiNavigation.position.y).setSize(l.room.width - uiPadding * 2, 2).fillRectangle()
    
    if (conditions.time.value < 100)
    {
        conditions.time.value += 0.01
    }
    else
    {
        conditions.time.value = 0
    }

    // Reposition the sun to show time
    timeSun.x = uiPadding + (l.room.width - uiPadding * 2) / 100 * conditions.time.value

    timeSun.draw()

    typewriter.setSize(uiNavigation.fontSize)

    if (player.temperature.warning || player.bloodPressure.warning || player.heart.warning || player.breathing.warning)
    {
        typewriter.setColor(red)
    }
    else
    {
        typewriter.setColor(green)
    }

    typewriter.setAlignment('left').setOpacity(uiBlock.opacity).setPosition(uiNavigation.buttons.vitals.x, uiNavigation.buttons.vitals.y).write('vitals')

    typewriter.setColor(green)
    typewriter.setAlignment('center').setOpacity(uiBlock.opacity).setPosition(uiNavigation.buttons.conditions.x, uiNavigation.buttons.conditions.y).write('conditions')
    typewriter.setAlignment('center').setOpacity(uiBlock.opacity).setPosition(uiNavigation.buttons.drones.x, uiNavigation.buttons.drones.y).write('drones')
    typewriter.setAlignment('right').setOpacity(uiBlock.opacity).setPosition(uiNavigation.buttons.inventory.x, uiNavigation.buttons.inventory.y).write('inventory')
}