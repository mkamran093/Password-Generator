let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");

let characters =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*_-+=";

function generate() {
  box1.textContent = password();
  box2.textContent = password();
  box3.textContent = password();
  box4.textContent = password();
}

function password() {
  let pass = "";
  for (let i = 0; i < 10; i++) {
    pass += characters[Math.floor(Math.random() * characters.length)];
  }
  return pass;
}
