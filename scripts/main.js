

var guy_img = document.getElementById('guy');
var x = 85;
document.getElementById('btn-right-guy').onclick = function right() {
  var guy_img = document.getElementById('guy');
  guy_img.style.position = "relative";
  x += 85;
  guy_img.style.left = x + "px";
}

var x = 0;
document.getElementById('btn-left-guy').onclick = function right() {
  var guy_img = document.getElementById('guy');
  guy_img.style.position = "relative";
  x -= 85;
  guy_img.style.left = x + "px";
}

var y = 85;
document.getElementById('btn-up-guy').onclick = function right() {
  var guy_img = document.getElementById('guy');
  guy_img.style.position = "relative";
  y += 85;
  guy_img.style.bottom = y + "px";
}

var y = 0;
document.getElementById('btn-down-guy').onclick = function right() {
  var guy_img = document.getElementById('guy');
  guy_img.style.position = "relative";
  y -= 85;
  guy_img.style.bottom = y + "px";
}

var girl_img = document.getElementById('girl');
var w = 85;
document.getElementById('btn-right-girl').onclick = function right() {
  var girl_img = document.getElementById('girl');
  girl_img.style.position = "relative";
  w += 85;
  girl_img.style.left = w + "px";
}

var w = 0;
document.getElementById('btn-left-girl').onclick = function right() {
  var girl_img = document.getElementById('girl');
  girl_img.style.position = "relative";
  w -= 85;
  girl_img.style.left = w + "px";
}

var z = 85;
document.getElementById('btn-up-girl').onclick = function right() {
  var girl_img = document.getElementById('girl');
  girl_img.style.position = "relative";
  z += 85;
  girl_img.style.bottom = z + "px";
}

var z = 0;
document.getElementById('btn-down-girl').onclick = function right() {
  var girl_img = document.getElementById('girl');
  girl_img.style.position = "relative";
  z -= 85;
  girl_img.style.bottom = z + "px";
}
