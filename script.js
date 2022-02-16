var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

ctx.beginPath();
ctx.arc(500, 120, 100, 0.5 * Math.PI, 2.5 * Math.PI, false);
ctx.stroke();

ctx.moveTo(500, 220);
ctx.lineTo(500, 500);
ctx.stroke();

ctx.lineTo(650, 680);
ctx.stroke();

ctx.moveTo(500, 500);
ctx.lineTo(350, 680);
ctx.stroke();

ctx.moveTo(500, 300);
ctx.lineTo(700, 350);
ctx.stroke();

ctx.moveTo(500, 300);
ctx.lineTo(300, 320);
ctx.stroke();


ctx.moveTo(460, 105);
ctx.beginPath();
ctx.arc(460, 105, 10, 0.5 * Math.PI, 2.5 * Math.PI, false);
ctx.stroke();

ctx.moveTo(540, 105);
ctx.beginPath();
ctx.arc(540, 105, 10, 0.5 * Math.PI, 2.5 * Math.PI, false);
ctx.stroke();


ctx.moveTo(470, 170);
ctx.lineTo(530, 170);
ctx.stroke();