var mouse = new Mouse()

var mousePreviousX = undefined
var mousePreviousY = undefined

var blocks = new Blocks()
var navigation = new Navigation()

var ambiance = new Ambiance()

var medical = new Medical()
var vitals = new Vitals()
var conditions = new Conditions()

var map = new Map()

var currentScreen = 'conditions'

var main = function()
{
	game.blank()

	if (currentScreen == 'conditions')
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
	else if (currentScreen == 'vitals')
	{
		var deathIncrease = 0 // For testing

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

	navigation.draw()
	ambiance.scanlines.draw()
	ambiance.corners.draw()
	ambiance.scratches.draw()

	/*
	ambiance.freezing.draw()
	ambiance.snow.draw()
	*/

	ambiance.sandstorm.draw()
	ambiance.buildup.draw()

	game.draw()
}

game.start(main)