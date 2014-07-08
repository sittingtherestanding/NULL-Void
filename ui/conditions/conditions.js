// Conditions ui values
screens.conditions = new Object()

screens.conditions.temperature = {
    x: uiPadding,
    y: uiNavigation.position.y - (uiPadding * 1.5 + uiBlock.tiny.height + uiBlock.title.height) * 2,
    width: uiBlock.tiny.width,
    height: uiBlock.tiny.height,
    color: green
}

screens.conditions.carbon = {
    x: uiPadding,
    y: uiNavigation.position.y - (uiPadding * 1.5 + uiBlock.tiny.height + uiBlock.title.height),
    width: uiBlock.tiny.width,
    height: uiBlock.tiny.height,
    color: green
}

screens.conditions.radiation = {
    x: l.room.width - uiPadding - uiBlock.tiny.width,
    y: uiNavigation.position.y - (uiPadding * 1.5 + uiBlock.tiny.height + uiBlock.title.height) * 2,
    width: uiBlock.tiny.width,
    height: uiBlock.tiny.height,
    color: green
}

screens.conditions.wind = {
    x: l.room.width - uiPadding - uiBlock.tiny.width,
    y: uiNavigation.position.y - (uiPadding * 1.5 + uiBlock.tiny.height + uiBlock.title.height),
    width: uiBlock.tiny.width,
    height: uiBlock.tiny.height,
    color: green
}

var conditionsSun = new Entity()
    conditionsSun.setSprite('images/screens/conditions/sun.png')
                 .setPosition(uiPadding, uiNavigation.position.y)
                 .setSize(25, 25)
                 .setAnchor(12, 12)

var drawConditions = function()
{
    map.draw()

    if (conditions.time.value < 100)
    {
        conditions.time.value += 0.01
    }
    else
    {
        conditions.time.value = 0
    }

    // Reposition the sun to show time
    conditionsSun.x = uiPadding + (l.room.width - uiPadding * 2) / 100 * conditions.time.value

	drawBlock('temperature', conditions.temperature.value, screens.conditions.temperature)
	drawBlock('c02 levels', conditions.carbon.value + ' ppmv', screens.conditions.carbon)
	drawBlock('radiation', conditions.radiation.value + ' msc', screens.conditions.radiation)
	drawBlock('wind', conditions.wind.value + ' mph', screens.conditions.wind)

    drawNavigation()

    conditionsSun.draw()
}