const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
/*
  |============================
  | First variant via append
  |============================
*/
// const listEl = document.querySelector(".gallery");

// const elements = images.map((image) => {
//   const itemEl = document.createElement("li");

//   const imgEl = document.createElement("img");
//   imgEl.src = image.url;
//   imgEl.alt = image.alt;
//   imgEl.width = 400;
//   itemEl.appendChild(imgEl);
//   console.log(itemEl);
//   return itemEl;
// });

// listEl.append(...elements);
/*
  |============================
  | Second variant via insertAdjacentHTML
  |============================
*/
// const listEl = document.querySelector(".gallery");

// const markup = "";

// const elements = images.reduce(
//   (acc, { url, alt }) =>
//     (acc += `<li><img width = "460" src="${url}" alt="${alt}"></img></li>`),

//   ``
// );

// listEl.insertAdjacentHTML("afterbegin", elements);

/*
  |============================
  | Third variant using function
  |============================
*/
const listEl = document.querySelector(".gallery");

function makeImageGallery(array, imgWidth) {
  const elements = array.reduce(
    (acc, { url, alt }) =>
      (acc += `<li><img width = "${imgWidth}" src="${url}" alt="${alt}"></img></li>`),

    ``
  );
  listEl.insertAdjacentHTML("afterbegin", elements);
}

makeImageGallery(images, 400);
