this.Ambiance = function()
{
    var self = this

    this.pencil = new Pencil()

	this.spacing = 4
    this.opacity = 0.1
	this.offset = 0
	this.speed = 0.25

    this.scanlines = function()
    {
    	if (self.offset < self.spacing)
    	{
    		self.offset += self.speed
    	}
    	else
    	{
    		self.offset = 0
    	}

    	self.i = Math.floor(l.room.height / self.spacing)
    	while (self.i--)
    	{
    		self.pencil.setColor(green).setOpacity(this.opacity).setPosition(0, self.i * self.spacing + Math.round(self.offset)).setEndPosition(l.room.width, self.i * self.spacing + Math.round(self.offset)).setStroke(1).strokeLine()
    	}

        return self
    }
}