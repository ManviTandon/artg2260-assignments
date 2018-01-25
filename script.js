function onClick() {
	createCanvas(250, 400);
	strokeWeight(15); 
	fill(0);
	
	// Draws head
	ellipse(150, 100, 50, 50);

	// Draws body
	fill(0, 255, 0, 197);
	rect(150, 100, 15, 90); 

	// Draws right arm 
	line(255, 170, 10, 60); 

	// Draws left arm 
	fill(0, 255, 0, 197);
	line(225, 170, 10, 60); 

	//Draws right leg
	fill(0, 255, 0, 197);
	line(110, 240, 10, 75); 

	//Draws left leg
	fill(0, 255, 0, 197);
	line(90, 240, 10, 75); 


}