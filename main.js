canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d")
greencar_image_height = 100;
greencar_image_width = 75;
background_image = "parkingLot.jpg";
greencar_image = "car2.png";
greencar_image_x = 400;
greencar_image_y = 300;
function add() {
	background_image_tag = new Image();
	background_image_tag.onload = uploadBackground();
	background_image_tag.src = background_image;
	greencar_image_tag = new Image();
	greencar_image_tag.onload = uploadgreencar();
	greencar_image_tag.src = greencar_image;
	
}

function uploadBackground() {
	ctx.drawImage(background_image_tag, 0, 0, canvas.width, canvas.height);

}

function uploadgreencar() {
	ctx.drawImage(greencar_image_tag, greencar_image_x, greencar_image_y, greencar_image_width, greencar_image_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up arrow is pressed");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down arrow is pressed");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left arrow is pressed");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right arrow is pressed");
		}
		
		
}

function up() {
	if(greencar_image_y >=0) {
		greencar_image_y = greencar_image_y-10;	
		console.log("The green car moves up.")
		uploadBackground();
		uploadgreencar();
	}
}


function down() {
	if (greencar_image_y <=300) {
		greencar_image_y = greencar_image_y+10;
		console.log("The green car moves down.")
		uploadBackground();
		uploadgreencar();
	}
}

function left() {
	if(greencar_image_x >=0) {
		greencar_image_x = greencar_image_x-10;
		console.log("The green car moves left.")
		uploadBackground();
		uploadgreencar();
	}
}

function right() {
	if(greencar_image_x <=700) {
		greencar_image_x = greencar_image_x+10;
		console.log("The green car moves right.")
		uploadBackground();
		uploadgreencar();

	}
}
