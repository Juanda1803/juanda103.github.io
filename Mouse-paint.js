var draw = document.getElementById('dibujito')
var d = draw.getContext('2d')

draw.addEventListener('mousedown', drawDown, false)
draw.addEventListener('mousemove', drawMove, false)
draw.addEventListener('mouseup', drawUp, false)

var estado = false
var colorcito = 'blue'
var xi, yi, xf, yf



function drawDown(event) {
    estado = true
    xi = event.clientX
    yi = event.clientY
}

function drawMove(event) {
    estado == true
    xi = event.clientX - 270
    yi = event.clientY - 220
    if (estado == true) {
        drawing(colorcito, xi, yi, xf, yf, d)
    }
    xf = xi
    yf = yi
    console.log(event)
}

function drawUp(event) {
    estado = false
    xi = event.clientX
    yi = event.clientY
    console.log(xi, yi)
}


function drawing(color, xinicial, yinicial, xfinal, yfinal, d) {
    d.beginPath();
    d.strokeStyle = color;
    d.lineWidth = 10;
    d.moveTo(xinicial, yinicial);
    d.lineTo(xfinal, yfinal);
    d.stroke();
    d.closePath();
}