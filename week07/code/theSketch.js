console.log("hello js!")

console.log(1 + 1)

function setup(){
    // runs once
    console.log("hello p5!")
    createCanvas(windowWidth,windowHeight);

}


function draw(){
    //loop runs 60 fps
    background(200, 100, 0)
    noFill()
    ellipse(mouseX,mouseY, 100)
}