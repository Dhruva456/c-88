canvas = new fabric.Canvas("myCanvas")
playerx = 10
playery = 10
blockwidth = 30
blockheight = 30
playerobject = ""
blockobject = ""

function playerupdate() {
    fabric.Image.fromURL("player.png", function (img) {
        playerobject = img;
        playerobject.scaleToWidth(150);
        playerobject.scaleToHeight(140)
        playerobject.set({
            top: playery,
            left: playerx
        });
        canvas.add(playerobject)
    });
}


function new_image(neew_image) {
    fabric.Image.fromURL(neew_image, function (img) {
        blockobject = img
        blockobject.scaleToWidth(blockwidth)
        blockobject.scaleToHeight(blockheight)
        blockobject.set({
            top: playery,
            left: playerx
        });
        canvas.add(blockobject)
    });
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (e.shiftKey == true && keyPressed == '80') {
        console.log("p and shift pressed together");
        blockwidth = blockwidth + 10;
        blockheight = blockheight + 10;
        document.getElementById("c_width").innerHTML = blockwidth;
        document.getElementById("c_height").innerHTML = blockheight;
    }
    if (e.shiftKey && keyPressed == '77') {
        console.log("m and shift pressed together");
        blockwidth = blockwidth - 10;
        blockheight = blockheight - 10;
        document.getElementById("c_width").innerHTML = blockwidth;
        document.getElementById("c_height").innerHTML = blockheight;
    }
    if (keyPressed == '38') {
        up();
        console.log("up");
    }
    if (keyPressed == '40') {
        down();
        console.log("down");
    }
    if (keyPressed == '37') {
        left();
        console.log("left");
    }
    if (keyPressed == '39') {
        right();
        console.log("right");
    }
    if (keyPressed == '87') {
        new_image('wall.jpg');
        console.log("w");
    }
    if (keyPressed == '71') {
        new_image('ground.png');
        console.log("g");
    }
    if (keyPressed == '76') {
        new_image('light_green.png');
        console.log("l");
    }
    if (keyPressed == '84') {
        new_image('trunk.jpg');
        console.log("t");
    }
    if (keyPressed == '82') {
        new_image('roof.jpg');
        console.log("r");
    }
    if (keyPressed == '89') {
        new_image('yellow_wall.png');
        console.log("y");
    }
    if (keyPressed == '68') {
        new_image('dark_green.png');
        console.log("d");
    }
    if (keyPressed == '85') {
        new_image('unique.png');
        console.log("u");
    }
    if (keyPressed == '67') {
        new_image('cloud.jpg');
        console.log("c");
    }
}
function up(){
    if (playery>0){
        playery=playery-blockheight
        canvas.remove(playerobject)
    playerupdate()
    }
    
}
function down(){
    if (playery<=500){
        playery=playery+blockheight
        canvas.remove(playerobject)
    playerupdate()
    }
    
}
function left(){
    if (playerx>0){
        playerx=playerx-blockwidth
        canvas.remove(playerobject)
    playerupdate()
    }
    
}
function right(){
    if (playerx<=900){
        playerx=playerx+blockwidth
        canvas.remove(playerobject)
    playerupdate()
    }
    
}