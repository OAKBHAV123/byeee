var canvas=new fabric.Canvas("myCanvas");
var player_X=10;
var player_Y=10;

var block_width=30;
var block_height=30;

var player_object="";
var block_object="";

function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_Y,
            left:player_X
        });
        canvas.add(player_object);
    });
}

function newImg(getImg){
fabric.Image.fromURL(getImg,function(Img){
    block_object=Img;
    block_object.scaleToHeight(block_height);
    block_width.scaleToWidth(block_width);
    block_object.set({
        top:player_Y,
        left:player_X
    });
    canvas.add(block_object);
});
}

window.addEventListener("Keydown", my_keydown);

function my_keydown(e){
    KeyPressed=e.my_keycode;
    console.log(KeyPressed);

    if(e.shifkey == true && KeyPressed == "80")
    {
        console.log("p and shift pressed together")
        block_img_width =block_img_width + 10;
        block_img_height= block_img_height + 10
        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_height").innerHTML = block_img_height;
    }

    
    if(e.shifkey == true && KeyPressed == "77")
    {
        console.log("m and shift pressed together")
        block_img_width =block_img_width - 10;
        block_img_height= block_img_height - 10
        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_height").innerHTML = block_img_height;
    }


if(KeyPressed == "37")
left();
console.log("left");

if(KeyPressed == "38")
up();
console.log("up");

if(KeyPressed == "39")
right();
console.log("right");

if(KeyPressed == "40")
down();
console.log("down");

if(KeyPressed == "66")
newImg("ironman_body.png");
console.log("b");

if(KeyPressed == "70")
newImg("ironman_face.png");
console.log("f");

if(KeyPressed == "76")
newImg("ironman_legs.png");
console.log("l");

if(KeyPressed == "82")
newImg("ironman_right_hand.png");
console.log("r");

if(KeyPressed == "67")
newImg("captain_america_left_hand.png");
console.log("c");

}