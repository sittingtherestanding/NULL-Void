var blue = '#003366'
var green = '#ccffcc'
var red = '#ff6666'

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