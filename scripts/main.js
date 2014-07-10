var mouse = new Mouse()

var map = new Map()

var blocks = new Blocks()
var navigation = new Navigation()

var ambiance = new Ambiance()

var medical = new Medical()
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
	if (mouse.leftClick && mouse.y > navigation.y)
	{
		if (mouse.x > padding && mouse.x < navigationDividerOne)
		{
			currentScreen = 'vitals'
		}
		else if (mouse.x > navigationDividerOne && mouse.x < navigationDividerTwo)
		{
			currentScreen = 'conditions'
		}
	}

	game.blank()

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
				vitals.bodyTemperature.color = colorWarning
			}

			if (player.bloodPressure.bottom >= 100)
			{
				player.bloodPressure.warning = true
				vitals.bloodPressure.color = colorWarning
			}

			if (player.heart.rate >= 100)
			{
				player.heart.warning = true
				vitals.heartRate.color = colorWarning
			}

			if (player.breathing.rate >= 50)
			{
				player.breathing.warning = true
				vitals.respiratoryRate.color = colorWarning
			}

			// Causes of death
			if (player.temperature.value >= 112)
			{
				medical.death()
			}

			if (player.bloodPressure.bottom >= 110)
			{
				medical.death()
			}
		}

		vitals.draw()
	}
	else if (currentScreen == 'conditions')
	{
		if (mouse.leftClick && mouse.x > padding && mouse.x < l.room.width - padding && mouse.y > padding && mouse.y < conditions.temperature.y - padding * 2)
		{
			if (mousePreviousX && mousePreviousY)
			{
				map.camera.x -= mouse.x - mousePreviousX
				map.camera.y -= mouse.y - mousePreviousY

				if (map.camera.x < -padding)
				{
					map.camera.x = -padding
				}
				else if (map.camera.x > map.width - l.dom.width)
				{
					map.camera.x = map.width - l.dom.width
				}
				
				if (map.camera.y < -padding)
				{
					map.camera.y = -padding
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

		conditions.draw()
	}

	navigation.draw()
	ambiance.scanlines.draw()
	ambiance.corners.draw()

	game.draw()
}

game.start(main)