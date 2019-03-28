
var guy_img = document.getElementById('guy');
var x = 85;
document.getElementById('btn-right-guy').onclick = function() {
  var guy_img = document.getElementById('guy');
  guy_img.style.position = "relative";
  if (x < 550) {
    x += 85;
    $("#guy").animate({left:'+=85px'})
  }
}

var x = 0;
document.getElementById('btn-left-guy').onclick = function () {
  var guy_img = document.getElementById('guy');
  guy_img.style.position = "relative";
  if (x > 0) {
    x -= 85;
    $("#guy").animate({left:'-=85px'})
  }
}

var y = 0;
document.getElementById('btn-up-guy').onclick = function() {
  var guy_img = document.getElementById('guy');
  guy_img.style.position = "relative";
  if (y != 0 && y < 85) {
    y += 85;
    $("#guy").animate({bottom:'+=85px'})
  }
}

var y = 0;
document.getElementById('btn-down-guy').onclick = function() {
  var guy_img = document.getElementById('guy');
  guy_img.style.position = "relative";
  if (y > -550) {
    y -= 85;
    $("#guy").animate({bottom:'-=85px'})
  }
}



var girl_img = document.getElementById('girl');
var w = 85;
document.getElementById('btn-right-girl').onclick = function right() {
  var girl_img = document.getElementById('girl');
  girl_img.style.position = "relative";
  if (w < 0) {
    w += 85;
    $("#girl").animate({left:'+=85px'})

  }
}

var w = 0;
document.getElementById('btn-left-girl').onclick = function right() {
  var girl_img = document.getElementById('girl');
  girl_img.style.position = "relative";
  if (w > -595) {
    w -= 85;
    $("#girl").animate({left:'-=85px'})
  }
}

var z = 85;
document.getElementById('btn-up-girl').onclick = function right() {
  var girl_img = document.getElementById('girl');
  girl_img.style.position = "relative";
  if (z < 595) {
    z += 85;
    $("#girl").animate({bottom:'+=85px'})
  }
}

var z = 0;
document.getElementById('btn-down-girl').onclick = function right() {
  var girl_img = document.getElementById('girl');
  girl_img.style.position = "relative";
  if (z > 0) {
    z -= 85;
    $("#girl").animate({bottom:'-=85px'})
  }
}
