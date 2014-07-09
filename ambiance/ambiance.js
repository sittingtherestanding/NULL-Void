var Ambiance = function()
{
	var spacing = 2

	var offset = 0
	var speed = 0.25

	var pencil = new Pencil()

    this.scanlines = function()
    {
    	if (offset < spacing)
    	{
    		offset += speed
    	}
    	else
    	{
    		offset = 0
    	}

    	var i = l.room.height / spacing
    	while (i--)
    	{
    		pencil.setColor(green).setOpacity(0.15).setPosition(0, i * spacing + Math.round(offset)).setEndPosition(l.room.width, i * spacing + Math.round(offset)).setStroke(1).strokeLine()
    	}
    }
}