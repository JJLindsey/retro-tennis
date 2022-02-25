//draw background - court

//create ball for play

//create paddles/bars for players

//functions for ball to move from each side of screen

//function to move paddles

const canvas = document.getElementById('game-court');
const context = canvas.getContext('2d');
//use p5js??

function drawRect (x,y,w,h,color) {
    context.fillStyle = "navy";
    context.fillRect(100,200, 50,75 );
}

function drawCircle (x,y,r,color) {
    context.fillStyle = "orange";
    context.beginPath();
    context.arc(300, 350,50, 0, Math.PI*2, false);
    context.closePath();
    context.fill();
}

drawRect()
drawCircle()