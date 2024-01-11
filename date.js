let hours = document.querySelector(".hours");
let mins = document.querySelector(".min");
let sece = document.querySelector(".seds");
let timezone = document.querySelector(".time-zone");

function update() {
  let date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  if (hour > 12 && hour < 22) {
    hours.innerText = "0" + (hour - 12);
    timezone.innerText = "P.M";
    timezone.style.fontSize = "2rem";
  } else if (hour >= 22 && hour <= 24) {
    hours.innerText = hour - 12;
    timezone.innerText = "P.M";
    timezone.style.fontSize = "2rem";
  } else {
    hours.innerText = hour;
  }

  if (min < 10) {
    mins.innerText = "0" + min;
  } else {
    mins.innerText = min;
  }

  if (sec < 10) {
    sece.innerText = "0" + sec;
  } else {
    sece.innerText = sec;
  }
}

setInterval(update, 1000);
