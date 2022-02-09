const canvas = document.getElementById('game-court');
const context = canvas.getContext('2d');


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