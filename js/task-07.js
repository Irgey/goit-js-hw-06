/*
  |============================
  | First funny version (best task in my life)
  |============================
*/
const inputRangeEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputRangeEl.addEventListener("input", onChangeValueInput);

function onChangeValueInput() {
  textEl.textContent = "Alexander Repeta 🐷 ROFL! ";
  textEl.style.fontSize = `${inputRangeEl.value}px`;
}
