/*
var black = '#2F343B'
var gray = '#7E827A'
var tan = '#E3CDA4'
var orange = '#C77966'
var red = '#703030'
*/

var colorOne = '#E1E6FA'
var colorTwo = '#C4D7ED'
var colorThree = '#ABC8E2'
var colorFour = '#375D81'
var colorFive = '#183152'
var colorError = '#D8634C'

var game = new Lorina()
	game.setTitle('NULL Void')
		.setColor(colorFive)
		.setRoomSize(320, 568)
		.setDomSize(320, 568)

var padding = 12
var bottom = l.room.height - padding * 5

var daylight = 0

var player = {
	alive: true,

	temperature: {
		warning: false,
		value: 98.6
	},

	bloodPressure: {
		warning: false,
		top: 117,
		bottom: 76
	},

	heart: {
		warning: false,
		rate: 70
	},

	breathing: {
		warning: false,
		deepness: 1,
		rate: 10
	}
}

var environment = {
	temperature: {
		warning: false,
		value: 101
	},

	carbon: {
		warning: false,
		value: 280
	},

	radiation: {
		warning: false,
		value: 31
	},

	wind: {
		warning: false,
		value: 22
	}
}