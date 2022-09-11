// 1) получить ссылку на ul
const allCategories = document.querySelectorAll("#categories .item");
console.log(allCategories);

// 2) почитать количество li(дочерних) в ul
const categoriesQuantity = allCategories.length;
console.log("Number of categories: ", categoriesQuantity);

// 3) создать функцию для консолтнга

const onCategoriesInfo = (array) =>
  array.forEach((elem) => {
    console.log("Category: ", elem.firstElementChild.textContent);
    console.log("Elements: ", elem.lastElementChild.children.length);
  });

onCategoriesInfo(allCategories);

// const onCategorieInfo = (elem) => {
//   console.log("Category: ", elem.firstElementChild.textContent);
//   console.log("Elements: ", elem.lastElementChild.children.length);
// };

// // 4) вызвать функцию для каждого елемента
// onCategorieInfo(allCategories.children[0]);
// onCategorieInfo(allCategories.children[1]);
// onCategorieInfo(allCategories.children[2]);

// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. +++

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента тега <h2> и количество элементов в категории (всех вложенных в него <li>).
