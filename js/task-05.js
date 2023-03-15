/*
  |============================
  | Second version with defaultValue storage
  |============================
*/
const inputEl = document.querySelector("#name-input");
const nameEl = document.querySelector("#name-output");
const defaultName = nameEl.textContent;
inputEl.addEventListener("input", onInput);

function onInput(event) {
  if (event.target.value) nameEl.textContent = event.target.value;
  else nameEl.textContent = defaultName;
}

/*
  |============================
  | First ver.
  |============================
*/
// const inputEl = document.querySelector("#name-input");
// const nameEl = document.querySelector("#name-output");

// inputEl.addEventListener("input", onInput);

// function onInput(event) {
//   console.log(event);
//   if (!(event.target.value === "")) nameEl.textContent = event.target.value;
//   else nameEl.textContent = "Anonymus";
// }
