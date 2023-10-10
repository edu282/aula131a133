img = "";
modelStatus = "";

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: detectando objetos";
}

function modelLoaded()
{
    console.log("modelo carregado");
    modelStatus = true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results)
{
    if(error)
    {
        console.error(error);
    }
    console.log(results)
}


function preload()
{
    img = loadImage('dog_cat.jpg');
}

function draw()
{
    image(img, 0, 0, 640, 420);
    fill(255, 0, 0);
    text("dog", 45, 75);
    noFill();
    stroke(255, 0, 0);
    rect(30, 60, 450, 350);

    fill(0, 255, 0);
    text("cat", 305, 80);
    noFill();
    stroke(0, 255, 0);
    rect(300, 65, 270, 334);
}
