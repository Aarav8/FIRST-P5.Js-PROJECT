function preload()
{
}
function setup()
{
    canvas = createCanvas(640,480);
    canvas.position(450,200);
    video=createCapture(VIDEO);
    video.size(100,100);
    video.hide();

    tint_filter="";
}
function draw()
{
    fill(color(28, 3, 252));
    circle(50, 50, 100);
    fill(color(28, 3, 252));
    circle(50, 430, 100);
    fill(color(28, 3, 252));
    circle(590, 50, 100);
    fill(color(28, 3, 252));
    circle(590, 430, 100);

    fill(color(207, 0, 31));
    rect(95, 30, 450, 40);
    fill(color(207, 0, 31));
    rect(30, 95, 40, 290);
    fill(color(207, 0, 31));
    rect(95, 410, 450, 40);
    fill(color(207, 0, 31));
    rect(570, 95, 40, 290);
    
    tint(tint_filter);
    image(video,70,70,500,340);
}
function take_snapshot()
{
save("download.png");
}
function tint_function()
{
    tint_filter=document.getElementById("filter").value;
}