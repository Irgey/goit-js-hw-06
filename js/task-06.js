const inputEl = document.querySelector("#validation-input");
const validLength = Number(inputEl.dataset.length);

inputEl.addEventListener("blur", onInputFocusLost);

/*
  |============================
  | Second OK version
  |============================
*/
function onInputFocusLost() {
  //   console.log(validLength);
  //   console.log(inputEl.value.length);
  if (inputEl.value.length === validLength) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
}

/*
  |============================
  | First broken version
  |============================
*/
// function onInputFocusLost(event) {
//   console.log(event);
//   console.dir(inputEl);
//   console.log(inputEl.value.length);
//   if (inputEl.value.length >= inputEl.dataset.length) {
//     inputEl.classList.add("valid");
//   } else {
//     if (inputEl.classList.contains("valid"))
//       inputEl.classList.replace("valid", "invalid");
//     else inputEl.classList.add("invalid");
//   }
// }
