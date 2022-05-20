
function keyplay(){
var w = event.key;
if(w=="w" || w =="W"){
  wplay();
}
var a = event.key;
if(a=="a" || a =="A"){
  aplay();
}
var s = event.key;
if(s=="s" || s =="S"){
  splay();
}
var d = event.key;
if(d=="d" || d =="D"){
  dplay();
}
var l = event.key;
if(l=="l" || l =="L"){
  lplay();
}
var j = event.key;
if(j=="j" || j =="J"){
  jplay();
}
var k = event.key;
if(k=="k" || k =="K"){
  kplay();
}
}



function wplay(){
  var audio = new Audio('sounds/tom-1.mp3');
  audio.play();

}

function aplay(){
  var audio = new Audio('sounds/tom-2.mp3');
  audio.play();

}

function splay(){
  var audio = new Audio('sounds/tom-3.mp3');
  audio.play();

}

function dplay(){
  var audio = new Audio('sounds/tom-4.mp3');
  audio.play();

}

function jplay(){
  var audio = new Audio('sounds/snare.mp3');
  audio.play();

}

function kplay(){
  var audio = new Audio('sounds/crash.mp3');
  audio.play();

}

function lplay(){
  var audio = new Audio('sounds/kick-bass.mp3');
  audio.play();

}
