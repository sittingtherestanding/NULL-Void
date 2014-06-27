var displayHeartRate = function()
{
    var beatIndex = 0

    var x = 0
    var initY = canvas.height / 2
    var y = initY

    var past = new Date()

    var beat = [0, 0, -14, -28, -14, 0, 18, 36, 18, 0, -25, -50, -25, 0, 25, 50, 25, 0, 0]
    var history = new Array()

    this.draw = function(width, height)
    {
        var present = new Date()

        if (present.getTime() - past.getTime() > 1000 * 60 / bpm)
        {
            beatIndex = 1 // Start the beat

            past = new Date()
        }

        if (beatIndex > 0 && beatIndex < beat.length - 1)
        {
            beatIndex++
        }
        else
        {
            beatIndex = 0 // Stop the beat
        }

        if (history.length >= width)
        {
            history.push(initY + beat[beatIndex])

            x = 0
            l.ctx.clearRect(0, 0, canvas.width, canvas.height)

            for (var j = history.length - width; j < history.length; j++)
            {
                l.ctx.beginPath()
                l.ctx.moveTo(x - 1, history[j - 1])
                l.ctx.lineTo(x, history[j])
                l.ctx.stroke()

                x++
            }
        }
        else
        {
            l.ctx.beginPath()

            if (beatIndex > 0)
            {
                history.push(initY + beat[beatIndex])

                l.ctx.moveTo(x - 1, initY + beat[beatIndex - 1])
                l.ctx.lineTo(x, initY + beat[beatIndex])
            }
            else
            {
                history.push(initY)

                l.ctx.moveTo(x - 1, initY)
                l.ctx.lineTo(x, initY)
            }
            
            l.ctx.stroke()

            x++   
        }
    }
}