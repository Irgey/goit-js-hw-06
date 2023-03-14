const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector("#ingredients");

const elements = ingredients.map((ingredient) => {
  const itemEl = document.createElement("li");
  itemEl.classList.add("name");
  itemEl.textContent = ingredient;
  return itemEl;
});

listEl.append(...elements);
