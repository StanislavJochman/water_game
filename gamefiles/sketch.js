var doska;
var jedlo;
var posuvnik;
var border = 5
var score = 0;
var startgame_enable = false;
var FPS = 30;
var EnterPress = 'Stlac [Enter] pre spustenie hry'
var Loose_enable = false;
var difficulty = 'Game difficulty:'

function setup() {
	createCanvas(600,600);
	doska = new pad();
	jedlo = new food();
	frameRate(FPS);
}
function difficulty_set(){
	jedlo.speed_y = jedlo_speed;
}
function draw() {
	if (startgame_enable == true && Loose_enable == false){
		noCursor();
		background_draw();
		jedlo.hit_check();
		jedlo.update();
  	jedlo.show();
  	doska.update();
  	doska.show();
	}
	else if(startgame_enable == false && Loose_enable == false) {
		doska.keys();
		startgame_screen();
		difficulty_set();
	}
	else if (Loose_enable == true && startgame_enable == true) {
		background_fail();
	}

}
function background_draw(){
	background(0);
	fill (255);
	rect(border/2,border/2,width - border,height - border);
	score_counter();
}
function startgame_screen(){
		background(50);
		fill(255);
		textSize(36);
		var ovladanie = 'Ovladanie:'
		var ovladanie_esc = '[esc]'
		var popis_esc = 'Reset'
		var creator = 'Vytvoril Stanislav Jochman (Clen teamu GalejeNextGen)'
		var ovladanie_sipky = '<--        [Space]        -->'
		var popis_sipky = 'Vlavo                       Vpravo'
		var popis_space = 'Stop'
		text(ovladanie,width/2 - textWidth(ovladanie)/2,50);
		textSize(20);
		text(ovladanie_esc,5,85);
		text(popis_esc,5,110);
		textSize(20);
		text(EnterPress,width/2 - textWidth(EnterPress)/2,height/2);
		textSize(15);
		text(creator,width/2 - textWidth(creator)/2,height/2 + 20);
		textSize(20);
		text(ovladanie_sipky,width/2 - textWidth(ovladanie_sipky)/2,height - 125);
		textSize(20);
		text(popis_sipky,width/2 - textWidth(popis_sipky)/2,height - 100);
		textSize(20);
		text(popis_space,width/2 - textWidth(popis_space)/2,height - 100);

}
function background_fail(){
		Loose_enable = true;
		background(0);
		fill (255,0,0);
		rect(border/2,border/2,width - border,height - border);
		textSize(36);
		fill (0,0,0);
		var Loose_text = 'Prehral si'
		var Your_score = 'Chytil si ' + score + ' kvapku/kvapiek vody'
		text(Loose_text,width/2 - textWidth(Loose_text)/2,height/2);
		textSize(20);
		text(EnterPress,width/2 - textWidth(EnterPress)/2,height/2 + 50);
		textSize(20);
		text(EnterPress,width/2 - textWidth(EnterPress)/2,height/2 + 50);
		textSize(20);
		text(Your_score,width/2 - textWidth(Your_score)/2,height/2 + 100);
		textSize(20);
		doska.keys();
}
function score_counter(){
	fill(0, 0, 0);
	textSize(36);
	text(score, 5,32);
}
