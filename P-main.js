canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

rectangle = "black";

ctx.beginPath();
ctx.strokeStyle = rectangle;
ctx.lineWidth = 5;
ctx.rect(100, 100, 600, 290);
ctx.stroke();

blue = "blue";

ctx.beginPath();
ctx.strokeStyle = blue;
ctx.lineWidth = 5;
ctx.arc(240, 210, 70, 0, 2*Math.PI);
ctx.stroke();

yellow = "yellow";

ctx.beginPath();
ctx.strokeStyle = yellow;
ctx.lineWidth = 5;
ctx.arc(320, 290, 70, 0, 2*Math.PI);
ctx.stroke();

black = "black";

ctx.beginPath();
ctx.strokeStyle = black;
ctx.lineWidth = 5;
ctx.arc(400, 210, 70, 0, 2*Math.PI);
ctx.stroke();

green = "green";

ctx.beginPath();
ctx.strokeStyle = green;
ctx.lineWidth = 5;
ctx.arc(480, 290, 70, 0, 2*Math.PI);
ctx.stroke();

red = "red";

ctx.beginPath();
ctx.strokeStyle = red;
ctx.lineWidth = 5;
ctx.arc(560, 210, 70, 0, 2*Math.PI);
ctx.stroke();