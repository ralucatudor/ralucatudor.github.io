var movePixels = 10; // number of pixels
var delayMs = 50; // number of miliseconds
var birdTimer = null;

// Move the image on screen with 10px
function birdFly() {
    var img = document.getElementsByTagName("img")[0];
    var currentLeft = parseInt(img.style.left);
    img.style.left = currentLeft + movePixels + "px";

    var currentBottom = parseInt(img.style.bottom);
    img.style.bottom = currentBottom + 2 + "px";
    console.log(img.style.bottom);
    // reset image position to start
    if (currentLeft > window.innerWidth - img.width) {
        img.style.left = "0px";
        img.style.bottom = "0px";
    }
}
      
// Call dogWalk function every 50 ms
function startBirdFly() {
    clearInterval(birdTimer);
    birdTimer = window.setInterval(birdFly, delayMs);
}

startBirdFly();