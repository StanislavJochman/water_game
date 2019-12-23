var size_y = 20;
var size_x = 50;
var pad_speed = 5;
var jedlo_speed = 5;
function pad() {
	this.x = (width/2) + (size_x/2) ;
	this.speed_x = 0;

	this.dir = function(x){
		this.speed_x = x;
	}
	this.keys = function(){
		if (keyCode == RIGHT_ARROW && startgame_enable == true) {
    		this.dir(-pad_speed);
    	}
    	else if (keyCode == LEFT_ARROW && startgame_enable == true) {
    		this.dir(pad_speed);
    	}
    	else if (keyCode == 27) {
    		this.reset();
			}
			else if (keyCode == 13){
				if (Loose_enable == false){
					startgame_enable = true;
				}
				else {
					doska.reset();
				}
			}
			else{
				this.dir(0);
			}

	}

	this.show = function(){
		rect(width-this.x,height - size_y - 5, size_x, size_y);
	}
	this.update = function(){
		this.x = this.x + this.speed_x;
		this.keys()
		fill(255);
		if (this.x - size_x < 0){
			this.x = size_x;
		}
		else if (this.x > width){
			this.x = width;
		}
	}
	this.reset = function(){
		console.warn("Reloading your page");
		location.reload(true);
	}
}
