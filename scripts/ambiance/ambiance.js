this.Ambiance = function()
{
	this.spacing = 2

	this.offset = 0
	this.speed = 0.25

	this.pencil = new Pencil()

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

    	this.i = Math.round(l.room.height / spacing)
    	while (i--)
    	{
    		pencil.setColor(green).setOpacity(0.15).setPosition(0, i * spacing + Math.round(offset)).setEndPosition(l.room.width, i * spacing + Math.round(offset)).setStroke(1).strokeLine()
    	}
    }
}