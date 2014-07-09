var game = new Lorina()
	game.setTitle('NULL Void')
		.setColor(blue)
		.setRoomSize(320, 568)
		.setDomSize(320, 568)

var mouse = new Mouse()

var environment = new Environment()
var map = new Map()
var player = new Player()

var layout = new Layout()

var ambiance = new Ambiance()

var vitals = new Vitals()
var conditions = new Conditions()

var currentScreen = 'vitals'
var navigationDividerOne = l.room.width / 8 * 1.75
var navigationDividerTwo = l.room.width / 8 * 4

var mousePreviousX = undefined
var mousePreviousY = undefined

var main = function()
{
	// Watch for clicks on navigation buttons
	if (mouse.leftClick && mouse.y > layout.navigation.y)
	{
		if (mouse.x > layout.padding && mouse.x < navigationDividerOne)
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
		var deathIncrease = 0.05 // For testing

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
				vitals.bodyTemperature.color = red
			}

			if (player.bloodPressure.bottom >= 100)
			{
				player.bloodPressure.warning = true
				vitals.bloodPressure.color = red
			}

			if (player.heart.rate >= 100)
			{
				player.heart.warning = true
				vitals.heartRate.color = red
			}

			if (player.breathing.rate >= 50)
			{
				player.breathing.warning = true
				vitals.respiratoryRate.color = red
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

		game.blank()

		vitals.draw(player)
		layout.navigation.draw()

		ambiance.scanlines.draw()

		game.draw()
	}
	else if (currentScreen == 'conditions')
	{
		if (mouse.leftClick && mouse.x > layout.padding && mouse.x < l.room.width - layout.padding && mouse.y > layout.padding && mouse.y < conditions.temperature.y - layout.padding * 2)
		{
			if (mousePreviousX && mousePreviousY)
			{
				map.camera.x -= mouse.x - mousePreviousX
				map.camera.y -= mouse.y - mousePreviousY

				if (map.camera.x < -layout.padding)
				{
					map.camera.x = -layout.padding
				}
				else if (map.camera.x > map.width - l.dom.width)
				{
					map.camera.x = map.width - l.dom.width
				}
				
				if (map.camera.y < -layout.padding)
				{
					map.camera.y = -layout.padding
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

		conditions.draw()
		layout.navigation.draw()

		ambiance.scanlines.draw()

		game.draw()
	}
}

game.start(main)