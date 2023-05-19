function mode(x) {
  document.getElementById("light").classList.toggle("hidden");
  document.getElementById("dark").classList.toggle("hidden");
  document.getElementById("html").classList.toggle("dark");
}

function humber() {
  document.getElementById("sideMenu").classList.toggle("left-[0]");
}
function sideMenu() {
  document.getElementById("sideMenu").classList.toggle("left-[0]");
}

// text typing for p tag

let i = 0;
let txt =
  "یک طراح و توسعه دهنده وبسایت از تهران.    علاقه مند به جاوا اسکریپت و ری اکت و تکنولوژی های سمت کلاینت.";
let speed = 90;

document.getElementById("body").onload = typeWriter();

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("p1").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
