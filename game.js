var game = new Lorina()
	game.setTitle('NULL Void')
		.setColor('#003366')
		.setRoomSize(320, 568)
		.setDomSize(320, 568)
		// For testing purposes
		/*
		.setRoomSize(400, 600)
		.setDomSize(400, 600)
		*/
		.setDomPosition(window.innerWidth / 2 - l.dom.width / 2, window.innerHeight / 2 - l.dom.height / 2)

var tool = new Tool() 
var mouse = new Mouse()

var pencil = new Pencil()
var typewriter = new Typewriter()
	typewriter.setFont('Furore') // Change to furoreregular to load from the web

var screens = new Object()

var currentScreen = 'vitals'
var navigationDividerOne = l.room.width / 8 * 1.75
var navigationDividerTwo = l.room.width / 8 * 4

var player = new Player()
var conditions = new Conditions()

var map = new Map()

var mousePreviousX = undefined
var mousePreviousY = undefined

var main = function()
{
	// Watch for clicks on navigation buttons
	if (mouse.leftClick && mouse.y > uiNavigation.position.y)
	{
		if (mouse.x > uiPadding && mouse.x < navigationDividerOne)
		{
			currentScreen = 'vitals'
		}
		else if (mouse.x > navigationDividerOne && mouse.x < navigationDividerTwo)
		{
			currentScreen = 'conditions'
		}
	}

	if (currentScreen == 'vitals')
	{
		var deathIncrease = 0.05

		if (player.alive && player.heart.rate > 0 && player.heart.rate < 198)
		{
			player.temperature.value += deathIncrease / 8

			player.heart.rate += deathIncrease
			player.breathing.rate += deathIncrease

			player.bloodPressure.bottom += deathIncrease
			player.bloodPressure.top = player.bloodPressure.bottom * 1.5

			// Warnings
			if (player.temperature.value >= 100.4)
			{
				player.temperature.warning = true
				screens.vitals.bodyTemperature.color = red
			}

			if (player.bloodPressure.bottom >= 100)
			{
				player.bloodPressure.warning = true
				screens.vitals.bloodPressure.color = red
			}

			if (player.heart.rate >= 100)
			{
				player.heart.warning = true
				screens.vitals.heartRate.color = red
			}

			if (player.breathing.rate >= 50)
			{
				player.breathing.warning = true
				screens.vitals.respiratoryRate.color = red
			}

			// Causes of death
			if (player.temperature.value >= 112)
			{
				player.death()
			}

			if (player.bloodPressure.bottom >= 110)
			{
				player.death()
			}
		}
		else
		{
			// Cool the body
			if (player.temperature.value > 0)
			{
				player.temperature.value -= deathIncrease / 10
			}
		}

		game.blank()

		drawVitals()
		drawNavigation()

		game.draw()
	}
	else if (currentScreen == 'conditions')
	{
		if (mouse.leftClick)
		{
			if (mousePreviousX && mousePreviousY)
			{
				map.camera.x -= mouse.x - mousePreviousX
				map.camera.y -= mouse.y - mousePreviousY

				if (map.camera.x < -uiPadding)
				{
					map.camera.x = -uiPadding
				}
				else if (map.camera.x > map.width - l.dom.width)
				{
					map.camera.x = map.width - l.dom.width
				}
				
				if (map.camera.y < -uiPadding)
				{
					map.camera.y = -uiPadding
				}
				else if (map.camera.y > map.height - l.dom.height)
				{
					map.camera.y = map.height - l.dom.height
				}
			}

			mousePreviousX = mouse.x
			mousePreviousY = mouse.y
		}
		else
		{
			mousePreviousX = undefined
			mousePreviousY = undefined
		}

		game.blank()

		drawConditions()

		game.draw()
	}
}

game.start(main)