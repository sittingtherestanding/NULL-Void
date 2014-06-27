var game = new Lorina()
	game.setTitle('NULL Void')
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

var screens = new Object()

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

	drawVitals()

	game.draw()
}

game.start(main)