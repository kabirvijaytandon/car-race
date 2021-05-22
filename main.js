canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var car_width = 100;
var car_height = 90;
var car_x = 10;
var car_y = 10;
var background_image = "racing.jpg";
var car_image = "car1.png";
function add(){
background_imgTag = new Image();
background_imgTag.onload = uploadBackground;
background_imgTag.src = background_image;

car_imgTag = new Image();
car_imgTag.onload = uploadcar;
car_imgTag.src = car_image;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag, 0,0, canvas.width, canvas.height);
}
function uploadcar(){
    ctx.drawImage(car_imgTag, car_x,car_y, car_width, car_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
if (keyPressed == '38'){
 up();
console.log('up');
}
if (keyPressed == '40'){
    down();
   console.log('down');
   }
   if (keyPressed == '37'){
    left();
   console.log('left');
   }
   if (keyPressed == '39'){
    right();
   console.log('right');
   }
}