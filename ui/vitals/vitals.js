// Vitals ui values
screens.vitals = new Object()

screens.vitals.skeleton = {x: uiPadding * 2 + uiBlock.half.width / 2, y: uiPadding + uiBlock.title.height}

var vitalsSkeleton = new Entity()
    vitalsSkeleton.setSprite('images/screens/vitals/skeleton.png')
                  .setPosition(screens.vitals.skeleton.x, screens.vitals.skeleton.y)
                  .setSize(89, 206)
                  .setAnchor(36, 0)

screens.vitals.bodyTemperature = {
    x: l.room.width - uiPadding - uiBlock.half.width,
    y: uiPadding,
    width: uiBlock.half.width,
    height: uiBlock.half.height,
    color: green
}

screens.vitals.bloodPressure = {
    x: l.room.width - uiPadding - uiBlock.half.width,
    y: uiPadding + uiBlock.title.height + uiPadding + uiBlock.half.height,
    width: uiBlock.half.width,
    height: uiBlock.half.height,
    color: green
}

screens.vitals.heartRate = {
    x: uiPadding,
    y: uiPadding * 3 + (uiBlock.title.height) * 2 + uiBlock.half.height * 2,
    width: uiBlock.full.width,
    height: uiBlock.full.height,
    color: green
}

screens.vitals.respiratoryRate = {
    x: uiPadding,
    y: uiPadding * 4 + (uiBlock.title.height) * 3 + uiBlock.half.height * 2 + uiBlock.full.height,
    width: uiBlock.full.width,
    height: uiBlock.full.height,
    color: green
}

var capnometer = new Capnometer()
var cardiogram = new Cardiogram()

var drawVitals = function()
{
    // Skeleton
    vitalsSkeleton.draw()

    // Body temperature
    drawBlock('temperature', Math.round(player.temperature.value * 10) / 10 + ' F', screens.vitals.bodyTemperature)

    // Blood pressure
    drawBlock('blood pressure', '', screens.vitals.bloodPressure)
    typewriter.setAlignment('center').setColor(game.color).setSize(uiBlock.content.fontSize).setPosition(screens.vitals.bloodPressure.x + screens.vitals.bloodPressure.width / 5, screens.vitals.bloodPressure.y + screens.vitals.bloodPressure.height / 3 + screens.vitals.bloodPressure.height / 18).write(Math.round(player.bloodPressure.top))
    pencil.setColor(game.color).setPosition(screens.vitals.bloodPressure.x + screens.vitals.bloodPressure.width / 16, screens.vitals.bloodPressure.y + uiBlock.title.height + screens.vitals.bloodPressure.height / 2.35 + screens.vitals.bloodPressure.height / 18).setSize(screens.vitals.bloodPressure.width / 3.5, 2).fillRectangle()
    typewriter.setAlignment('center').setColor(game.color).setSize(uiBlock.content.fontSize).setPosition(screens.vitals.bloodPressure.x + screens.vitals.bloodPressure.width / 5, screens.vitals.bloodPressure.y + screens.vitals.bloodPressure.height / 3 * 2 + screens.vitals.bloodPressure.height / 18).write(Math.round(player.bloodPressure.bottom))
    typewriter.setAlignment('left').setColor(game.color).setSize(uiBlock.content.fontSize).setPosition(screens.vitals.bloodPressure.x + screens.vitals.bloodPressure.width / 5 * 2, screens.vitals.bloodPressure.y + screens.vitals.bloodPressure.height / 2 + screens.vitals.bloodPressure.height / 18).write('mm hg')

    // Heart rate
    drawBlock('heart rate', '', screens.vitals.heartRate, Math.round(player.heart.rate) + ' beats per minute')
    cardiogram.draw(screens.vitals.heartRate.x, screens.vitals.heartRate.y + uiBlock.title.height, screens.vitals.heartRate.width, screens.vitals.heartRate.height)

    // Respiratory rate
    drawBlock('respiratory rate', '', screens.vitals.respiratoryRate, Math.round(player.breathing.rate) + ' breaths per minute')
    capnometer.draw(screens.vitals.respiratoryRate.x, screens.vitals.respiratoryRate.y + uiBlock.title.height, screens.vitals.respiratoryRate.width, screens.vitals.respiratoryRate.height)
}