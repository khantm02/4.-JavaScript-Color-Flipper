const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.querySelector(".btn");
const color = document.querySelector(".color");

function getRandomColor() {
  let hexColor = "#";
  for (let i = 1; i <= 6; i++) {
    // hexColor += hex[0];
    hexColor += hex[Math.trunc(Math.random() * hex.length)];
  }
  return hexColor;
}

btn.addEventListener("click", function () {
  let hexColor = getRandomColor();

  color.textContent = hexColor;
  document.querySelector("main").style.backgroundColor = hexColor;
});
