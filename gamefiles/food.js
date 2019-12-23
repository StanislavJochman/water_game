var food_size = 20
var print_succesfull = true;
function food (){
	this.x = 0;
	this.y = height;
	this.food_color = [0,0,255];
	this.speed_y = jedlo_speed;


	this.color_picker = function (){
		ellipse(this.x,this.y,food_size,food_size);

	}
	this.food_spawn = function (){
		this.x = random(30, width - food_size - 30);
		this.y = 0;
		print_succesfull = false;
	}
	this.update = function(){
		if (this.y>=height){
			if (print_succesfull==true){
				this.color_picker();
				this.food_spawn();
			}
			else {
				background_fail();
			}
		}
		else{
			this.y = this.y + this.speed_y;
		}
	}
	this.show = function() {
		fill(this.food_color[0],this.food_color[1],this.food_color[2],)
		ellipse(this.x,this.y,food_size,food_size);
	}
	this.hit_check = function() {
		if (this.y > height - 10 && print_succesfull == 0) {
			if (this.x >= width - doska.x - food_size && this.x <= width - doska.x + size_x){
				score ++;
				console.log("trafil si");
				print_succesfull = true;
			}
		}
	}
}
