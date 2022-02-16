// página de login

function logar() {
  document.getElementById("home").style.filter = "blur(2px)";
  document.getElementById("about").style.filter = "blur(2px)";
  document.getElementById("about").style.transform = "scale(1.01)";
  // document.getElementById("about").style.width = '1260px';
  document.getElementById("home").style.transform = "scale(1.2)";
  document.getElementById("box").style.transform = "scale(1)";
  document.getElementById("home").style.filter = "blur(2px)";
  document.getElementById("box").style.opacity = "1";
  document.getElementById("fazer-login").style.display = "block";
  document.getElementById("cadastro").style.display = "block";
}

function logof() {
  document.getElementById("box").style.opacity = "0";
  document.getElementById("home").style.filter = "blur(0)";
  document.getElementById("about").style.filter = "blur(0)";
  document.getElementById("cadastro").style.display = "none";
  document.getElementById("home").style.transform = "scale(1)";
  document.getElementById("fazer-login").style.display = "none";
  document.getElementById("about").style.transform = "scale(1)";
}

//menu lateral

function menuof() {
  document.getElementById("menu").style.width = "3px";
  document.getElementById("menu").style.top = "40%";
  document.getElementById("menu").style.height = "200px";
  document.getElementById("bola").style.width = "0px";
  document.getElementById("x").style.display = "none";
  document.getElementById("x").style.width = "0px";
}
function menuon() {
  document.getElementById("menu").style.width = "20%";
  document.getElementById("menu").style.height = "70%";
  document.getElementById("menu").style.top = "100px";
  document.getElementById("x").style.display = "block";
  document.getElementById("x").style.width = "25px";
  document.getElementById("bola").style.width = "100px";
}
function pontero() {
  document.getElementById("menu").style.cursor = "pointer";
}
