var Player = function()
{
	this.alive = true

	this.temperature = {
		warning: false,
		value: 98.6
	}

	this.bloodPressure = {
		warning: false,
		top: 117,
		bottom: 76
	}

	this.heart = {
		warning: false,
		rate: 70
	}

	this.breathing = {
		warning: false,
		deepness: 1,
		rate: 10
	}

	this.death = function()
	{
		this.alive = false
	    this.heart.rate = 0
	    this.breathing.rate = 0
	}
}