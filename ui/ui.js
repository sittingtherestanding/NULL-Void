// UI colors
var green = '#ccffcc'

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

    uiBlock.half = {
        width: l.room.width / 2 - uiPadding * 3,
        height: (uiNavigation.position.y - (uiPadding * 5) - ((uiBlock.title.height) * 4)) / 4
    }

    uiBlock.full = {
        width: l.room.width - uiPadding * 2,
        height: (uiNavigation.position.y - (uiPadding * 5) - ((uiBlock.title.height) * 4)) / 4
    }

var drawBlock = function(title, content, block)
{
    pencil.setOpacity(uiBlock.opacity).setColor(block.color).setPosition(block.x, block.y + uiBlock.title.height).setSize(block.width, block.height).fillRectangle()
    typewriter.setAlignment('left').setOpacity(uiBlock.opacity).setColor(block.color).setSize(uiBlock.title.fontSize).setPosition(block.x, block.y).write(title)
    typewriter.setAlignment('center').setColor(game.color).setSize(uiBlock.content.fontSize).setPosition(block.x + block.width / 2, block.y + block.height / 2 + block.height / 18).write(content)
}