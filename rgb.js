"use strict";
const btn = document.querySelector(".btn");
const color = document.querySelector(".color");

function generateRandomNumber() {
  const r = Math.trunc(Math.random() * 255);
  const g = Math.trunc(Math.random() * 255);
  const b = Math.trunc(Math.random() * 255);

  const rgb = `rgb(${r}, ${g}, ${b})`;
  return rgb;
}

btn.addEventListener("click", function () {
  const randomNumber = generateRandomNumber();

  color.textContent = generateRandomNumber();
  document.querySelector("main").style.backgroundColor = generateRandomNumber();
});
