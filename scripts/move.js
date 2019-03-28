
var x = 0;
var y = 0;
//document.addEventListener('keyUp', press)
document.onkeydown = function () {
    press(event);
};
function press(event) {
    if (event.key === 'w') {
        var guy_img = document.getElementById('guy');
        guy_img.style.position = "relative";
        hitTopGuy();
        $("#guy").animate({bottom:'+=85px'})
    }
    
    if (event.key === 'd') {
        var guy_img = document.getElementById('guy');
        guy_img.style.position = "relative";
        hitRightGuy();
        $("#guy").animate({left:'+=85px'})
    }
    
    if (event.key === 's') {
        var guy_img = document.getElementById('guy');
        guy_img.style.position = "relative";
        hitBottomGuy();
        $("#guy").animate({bottom:'-=85px'})
    }
    
    if (event.key === 'a') {
        var guy_img = document.getElementById('guy');
        guy_img.style.position = "relative";
        hitLeftGuy();
       $("#guy").animate({left:'-=85px'})
    }
    
    if (event.key === 'i') {
        var girl_img = document.getElementById('girl');
        girl_img.style.position = "relative";
        hitTopGirl();
        $("#girl").animate({bottom:'+=85px'})
    }
    
    if (event.key === 'j') {
        var girl_img = document.getElementById('girl');
        girl_img.style.position = "relative";
        hitLeftGirl();
        $("#girl").animate({left:'-=85px'})
    }
    
     if (event.key === 'k') {
        var girl_img = document.getElementById('girl');
        girl_img.style.position = "relative";
        hitBottomGirl();
        $("#girl").animate({bottom:'-=85px'})
    }
    
    if (event.key === 'l') {
        var girl_img = document.getElementById('girl');
        girl.style.position = "relative";
        hitRightGirl();
        $("#girl").animate({left:'-=85px'})
    } 
}

function hitTopGuy () {
    if (y != 0 && y < 85) {
        y += 85;
    }
}

function hitBottomGuy () {
    if (y > -550) {
        y -= 85;
    }
}

function hitLeftGuy () {
    if (x > 0) {
        x -= 85;
    }
}

function hitRightGuy () {
    if (x < 550) {
        x += 85;
    }
}

function hitTopGirl () {
    if (y < 595) {
        y += 85;
    }
}

function hitBottomGirl () {
    if (y > 0) {
        y -= 85;
    }
}

function hitLeftGirl () {
    if (x > -595) {
        x -= 85;
    }
}

function hitRightGirl () {
    if (x < 0) {
        x += 85;
    }
}




