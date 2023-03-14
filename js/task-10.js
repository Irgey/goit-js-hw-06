function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtnEl = document.querySelector("[data-create]");
const destroyBtnEl = document.querySelector("[data-destroy]");
const numberInputEl = document.querySelector("input[type = 'number']");
const divBoxesEl = document.querySelector("#boxes");
let size = 30;
createBtnEl.addEventListener("click", () => {
  createBoxes(numberInputEl.value);
});
destroyBtnEl.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  console.log(amount);
  let boxesEl = "";
  for (let index = 0; index < amount; index++) {
    boxesEl += `<div style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()};"></div>`;
    size += 10;
  }
  size = 30;
  divBoxesEl.insertAdjacentHTML("beforeend", boxesEl);
}

function destroyBoxes() {
  console.log(divBoxesEl.children);
  while (divBoxesEl.firstChild) {
    divBoxesEl.removeChild(divBoxesEl.firstChild);
  }
}
