/*
  |============================
  | Third ver. with FormData
  |============================
*/

const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  console.dir(event);
  const {
    email: { value: email },
    password: { value: password },
  } = event.target.elements;

  if (email === "" || password === "") {
    alert("Всі поля повинні бути заповнені(╯°□°）╯︵ ┻━┻!!!");
  } else {
    const userAuth = new FormData(event.target);
    userAuth.forEach((value, key) => {
      console.log(value);
      console.log(key);
    });
    formEl.reset();
  }
}
/*
  |============================
  | Second (via event.target and destructuring) version
  |============================
*/
// const formEl = document.querySelector(".login-form");

// formEl.addEventListener("submit", onFormSubmit);

// function onFormSubmit(event) {
//   event.preventDefault();
//   console.dir(event);
//   const {
//     email: { value: email },
//     password: { value: password },
//   } = event.target.elements;

//   if (email === "" || password === "") {
//     alert("Всі поля повинні бути заповнені(╯°□°）╯︵ ┻━┻!!!");
//   } else {
//     const userAuth = {
//       login: email,
//       password: password,
//     };
//     console.log(userAuth);
//     formEl.reset();
//   }
// }

/*
  |============================
  | First OK version
  |============================
*/

// const formEl = document.querySelector(".login-form");

// formEl.addEventListener("submit", onFormSubmit);

// function onFormSubmit(event) {
//   event.preventDefault();
//   console.dir(event);

//   if (
//     formEl.elements.email.value === "" ||
//     formEl.elements.password.value === ""
//   ) {
//     alert("Всі поля повинні бути заповнені(╯°□°）╯︵ ┻━┻!!!");
//   } else {
//     const userAuth = {
//       login: formEl.elements.email.value,
//       password: formEl.elements.password.value,
//     };
//     console.log(userAuth);
//     formEl.reset();
//   }
// }
