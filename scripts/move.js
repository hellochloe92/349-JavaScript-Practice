
var x = 0;
var y = 0;
document.addEventListener('keyDown', press)
document.onkeydown = function(event){
    press(event);
}
function press(event) {
    if (event.key === 'w') {
        var guy_img = document.getElementById('guy');
        guy_img.style.position = "relative";
        y += 170;
        guy_img.style.bottom = y + "px";
    }
    
    if (event.key === 'd') {
        var guy_img = document.getElementById('guy');
        guy_img.style.position = "relative";
        x += 170;
        guy_img.style.left = x + "px";
    }
    
    if (event.key === 's') {
        var guy_img = document.getElementById('guy');
        guy_img.style.position = "relative";
        y -= 85;
        guy_img.style.bottom = y + "px";
    }
    
    if (event.key === 'a') {
        var guy_img = document.getElementById('guy');
        guy_img.style.position = "relative";
        x -= 85;
        guy_img.style.left = x + "px";
    }
    
    if (event.key === 'i'){
        var girl_img = document.getElementById('girl');
        girl_img.style.position = "relative";
        y += 170;
        girl_img.style.bottom = y + "px";
    }
    
    if (event.key === 'j') {
        var girl_img = document.getElementById('girl');
        girl_img.style.position = "relative";
        x -= 85;
        girl_img.style.left = x + "px";
    }
    
     if (event.key === 'k') {
        var girl_img = document.getElementById('girl');
        girl_img.style.position = "relative";
        y -= 85;
        girl.style.bottom = y + "px";
    }
    
    if (event.key === 'l') {
        var girl_img = document.getElementById('girl');
        girl.style.position = "relative";
        x += 170;
        girl.style.left = x + "px";
    } 
}

