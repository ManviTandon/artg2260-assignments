var weight = 1;
var buttonWidth = 10; 
var buttonHeight = 10;
var drawRect = true; 


// stores color
var penColor; 

function setup() {
createCanvas(300, 300);
	noFill ();
    rect(0, 0 ,width, height);
    saveCanvas('myCanvas', 'jpg');
    saveCanvas(c, 'myCanvas', 'jpg');
saveCanvas(c, 'myCanvas');
saveCanvas(c);
saveCanvas('myCanvas', 'png');
saveCanvas('myCanvas');
saveCanvas();
}
	penColor = color(0); // assign the color black to penColor
}

function draw(){
	// let's first disable the stroke so our button is just a fill color
  	noStroke(); 
  	fill (255,0,0);
  	rect(10, 10, buttonWidth, buttonHeight);

  	if (mouseIsPressed == true) {
	  	// now, before we draw anything, let's set the stroke color to our global penColor
	    stroke(penColor);
    	if (drawRect == true){
      		rect(mouseX, mouseY, weight, weight); 
    	} else {
      		strokeWeight(weight);
      		line(mouseX, mouseY, pmouseX, pmouseY);
      	}
    }	
}

// lets use another one of p5's functions called mouseReleased()
function mouseReleased() {
    // see if our button was clicked
    if ((mouseX > 10) && (mouseX < buttonWidth+10) && (mouseY > 10) && (mouseY < buttonHeight+10)){
      print(" button was clicked!"); // prints to the console so we know it's working
      if (drawRect == true){ 
          drawRect = false; // if drawRect is true, switch to false
      } else {
          drawRect = true;  // if drawRect is false, switch to true
      }
    }
}

    // Clear the canvas context using the canvas width and height
    function clearCanvas(){
        clearRect(0, 0, canvas.width, canvas.height);
    }


function keyPressed() {
	// now in this function, instead of directly setting the stroke() color
    // we change the global variable penColor
	if (key == 'b' || key == 'B') {
	  penColor = color(0, 0, 255);
	}  else if (key == 'g' || key == 'G'){
    penColor = color(124, 255, 0);
  }  else if (key == 'y' || key == 'Y'){
    penColor = color(255, 255, 51);
  }  else if (key == 'o' || key == 'O'){
    penColor = color(255, 128, 0);
  } else if (key == 'k' || key == 'K'){
	  penColor = color(0, 0, 0);
	} else if (key == 'w' || key == 'W'){
	  penColor = color(255, 255, 255);
	} else if (key == 'b' || key == 'B'){
	  penColor = color(102, 51, 0);
	} else if (keyCode == RIGHT_ARROW){
      weight++;
      strokeWeight(weight);
    } else if (keyCode == LEFT_ARROW){
      weight/=2;
      strokeWeight(weight);
    }
}