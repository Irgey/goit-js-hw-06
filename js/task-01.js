// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного елемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.

const listEl = document.querySelectorAll(".item");
console.log(listEl);

console.log(`Number of categories: ${listEl.length}`);
listEl.forEach((list) => {
  console.log(`Category: ${list.firstElementChild.textContent}
  Elements: ${list.lastElementChild.children.length}`);
});
