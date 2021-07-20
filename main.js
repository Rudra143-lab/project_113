function setup(){
    canvas=createCanvas(800,400);
    canvas.position(550,280);
    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,65,30,400,300);
    fill(0, 171, 26);
    stroke(0, 171, 26);
    circle(500, 350, 60);
    fill(0, 171, 26);
    stroke(0, 171, 26);
    circle(30, 350, 60);
    fill(0, 171, 26);
    stroke(0, 171, 26);
    circle(30, 20, 60);
    fill(0, 171, 26);
    stroke(0, 171, 26);
    circle(500, 20, 60);
    fill(0, 255, 255);
    stroke(0, 255, 255)
    rect(60, 18, 410, 5);
    fill(0, 255, 255);
    stroke(0, 255, 255)
    rect(60, 350, 410, 5);
    fill(0, 255, 255);
    stroke(0, 255, 255)
    rect(60, 18, 5, 330);
    fill(0, 255, 255);
    stroke(0, 255, 255)
    rect(470, 18, 5, 337);
}

function take_snapshot(){
    save('my_image.png');
}