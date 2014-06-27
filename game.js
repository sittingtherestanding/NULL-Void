var game = new Lorina()
	game.setTitle('Mechs')
		.setColor('#003366')
		.setRoomSize(320, 568)
		.setDomSize(320, 568)
		// .setRoomSize(400, 600)
		// .setDomSize(400, 600)
		.setDomPosition(window.innerWidth / 2 - l.dom.width / 2, window.innerHeight / 2 - l.dom.height / 2)

var tool = new Tool() 
var mouse = new Mouse()

var pencil = new Pencil()
var typewriter = new Typewriter()
	typewriter.setFont('Furore')

// ui colors
var green = '#ccffcc'

// ui values
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

var screens = new Object()

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

// Player values
var player = {
	temperature: 98.6,
	bloodPressure: {
		top: 117,
		bottom: 76
	},
	heartRate: 70,
	breathing: 
	{
		deepness: 1,
		rate: 10
	}
}

var main = function()
{
	game.blank()

	// Skeleton
	vitalsSkeleton.draw()

	// Body temperature
	drawBlock('temperature', player.temperature + ' F', screens.vitals.bodyTemperature)

	// Blood pressure
	drawBlock('blood pressure', '', screens.vitals.bloodPressure)
	typewriter.setAlignment('center').setColor(game.color).setSize(uiBlock.content.fontSize).setPosition(screens.vitals.bloodPressure.x + screens.vitals.bloodPressure.width / 5, screens.vitals.bloodPressure.y + screens.vitals.bloodPressure.height / 3 + screens.vitals.bloodPressure.height / 18).write(player.bloodPressure.top)
	pencil.setColor(game.color).setPosition(screens.vitals.bloodPressure.x + screens.vitals.bloodPressure.width / 16, screens.vitals.bloodPressure.y + uiBlock.title.height + screens.vitals.bloodPressure.height / 2.35 + screens.vitals.bloodPressure.height / 18).setSize(screens.vitals.bloodPressure.width / 3.5, 2).fillRectangle()
	typewriter.setAlignment('center').setColor(game.color).setSize(uiBlock.content.fontSize).setPosition(screens.vitals.bloodPressure.x + screens.vitals.bloodPressure.width / 5, screens.vitals.bloodPressure.y + screens.vitals.bloodPressure.height / 3 * 2 + screens.vitals.bloodPressure.height / 18).write(player.bloodPressure.bottom)
	typewriter.setAlignment('left').setColor(game.color).setSize(uiBlock.content.fontSize).setPosition(screens.vitals.bloodPressure.x + screens.vitals.bloodPressure.width / 5 * 2, screens.vitals.bloodPressure.y + screens.vitals.bloodPressure.height / 2 + screens.vitals.bloodPressure.height / 18).write('mm hg')

	// Heart rate
	drawBlock('heart rate', '', screens.vitals.heartRate)
	cardiogram.draw(screens.vitals.heartRate.x, screens.vitals.heartRate.y + uiBlock.title.height, screens.vitals.heartRate.width, screens.vitals.heartRate.height)

	// Respiratory rate
	drawBlock('respiratory rate', '', screens.vitals.respiratoryRate)
	capnometer.draw(screens.vitals.respiratoryRate.x, screens.vitals.respiratoryRate.y + uiBlock.title.height, screens.vitals.respiratoryRate.width, screens.vitals.respiratoryRate.height)

	// Navigation
	pencil.setColor(green).setPosition(uiPadding, uiNavigation.position.y).setSize(l.room.width - uiPadding * 2, 2).fillRectangle()
	typewriter.setColor(green).setSize(uiNavigation.fontSize)
	typewriter.setAlignment('left').setPosition(uiNavigation.buttons.vitals.x, uiNavigation.buttons.vitals.y).write('vitals')
	typewriter.setAlignment('center').setPosition(uiNavigation.buttons.conditions.x, uiNavigation.buttons.conditions.y).write('conditions')
	typewriter.setAlignment('center').setPosition(uiNavigation.buttons.drones.x, uiNavigation.buttons.drones.y).write('drones')
	typewriter.setAlignment('right').setPosition(uiNavigation.buttons.inventory.x, uiNavigation.buttons.inventory.y).write('inventory')

	game.draw()
}

game.start(main)

var drawBlock = function(title, content, block)
{
	pencil.setOpacity(block.opacity).setColor(block.color).setPosition(block.x, block.y + uiBlock.title.height).setSize(block.width, block.height).fillRectangle()
	typewriter.setAlignment('left').setOpacity(block.opacity).setColor(block.color).setSize(uiBlock.title.fontSize).setPosition(block.x, block.y).write(title)
	typewriter.setAlignment('center').setColor(game.color).setSize(uiBlock.content.fontSize).setPosition(block.x + block.width / 2, block.y + block.height / 2 + block.height / 18).write(content)
}