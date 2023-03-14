let counterValue = 0;

const decrementBtnEl = document.querySelector("[data-action='decrement']");

const incrementBtnEl = document.querySelector("[data-action='increment']");

const counterEl = document.querySelector("#value");

function onClickIncrementBtn() {
  counterValue += 1;
  counterEl.textContent = counterValue;
}
function onClickDecrementBtn() {
  counterValue -= 1;
  counterEl.textContent = counterValue;
}

decrementBtnEl.addEventListener("click", onClickDecrementBtn);
incrementBtnEl.addEventListener("click", onClickIncrementBtn);
