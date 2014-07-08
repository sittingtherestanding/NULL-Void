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

var drawConditions = function()
{
    map.draw()

    // Draw a border around the map
    pencil.setOpacity(uiBlock.opacity).setPosition(uiPadding, uiPadding).setColor(green).setStroke(2).setSize(l.dom.width - uiPadding * 2, screens.conditions.temperature.y - uiPadding * 2).strokeRectangle()

    // Block out map drawing that overflows the alloted space
    pencil.setPosition(0, 0).setColor(game.color).setSize(l.dom.width, uiPadding).fillRectangle()
    pencil.setPosition(0, 0).setColor(game.color).setSize(uiPadding, l.dom.height).fillRectangle()
    pencil.setPosition(l.dom.width - uiPadding, 0).setColor(game.color).setSize(uiPadding, l.dom.height).fillRectangle()
    pencil.setPosition(0, screens.conditions.temperature.y - uiPadding).setColor(game.color).setSize(l.dom.width, l.dom.height - screens.conditions.temperature.y + uiPadding).fillRectangle()

	drawBlock('temperature', conditions.temperature.value, screens.conditions.temperature)
	drawBlock('c02 levels', conditions.carbon.value + ' ppmv', screens.conditions.carbon)
	drawBlock('radiation', conditions.radiation.value + ' msc', screens.conditions.radiation)
	drawBlock('wind', conditions.wind.value + ' mph', screens.conditions.wind)

    drawNavigation()
}