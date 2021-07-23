// counter concept
var count = document.querySelector(".coun");

var count = document.querySelector(".coun");
count.addEventListener("click", () => {
  var numbe = document.querySelector(".num");
  var value = numbe.innerHTML;
  value++;
  document.querySelector(".num").innerHTML = value;
});
var count = document.querySelector(".counn");
count.addEventListener("click", () => {
  var numbe = document.querySelector(".num");
  var value = numbe.innerHTML;
  value--;
  document.querySelector(".num").innerHTML = value;
});

// background concept
var backg = document.querySelector(".bga");
backg.addEventListener("click", () => {
  document.querySelector(".background").style.backgroundColor = "red";
});
var backg = document.querySelector(".bgaa");
backg.addEventListener("click", () => {
  document.querySelector(".background").style.backgroundColor = "#ccc";
});

// gusses the secret code
var gss = document.querySelector(".gusses");
gss.addEventListener("click", () => {
  let gusees = "boy";
  let input = prompt(" Entere the secret code");
  while (gusees !== input) {
    input = prompt("Enter the secret code !!");
    if (gusees == input.toLowerCase()) {
      document.querySelector(".gu").innerHTML =
        "congrates you got the secret!!";
      break;
    }
  }
});
