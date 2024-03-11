const btn = document.querySelector("#change");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function changeBackground() {
  const randomColor = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = randomColor;
}

btn.addEventListener("click", changeBackground);
