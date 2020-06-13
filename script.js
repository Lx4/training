var el = document.getElementById("test");
var list = document.getElementsByTagName("main");
var main = list[0];
var x = 0;

setInterval(() => {
  x <= window.innerWidth - 100 ? (x += 3) : (x = 0);
  el.style.left = x + "px";
  el.textContent = "init";
}, 1000);
