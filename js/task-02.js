const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

//  получаю ссилку на список
const listEl = document.querySelector("#ingredients");

//  создаю функцию , которая будет перебирать массив ингридиентов и созавать под каждый разметку с текстом
const onMakeMurkup = (array) =>
  array.map((elem) => {
    const itemEl = document.createElement("li");
    itemEl.textContent = elem;

    return itemEl;
  });

// console.log(onMakeMurkup(ingredients));

//  заливаю елементы в список
listEl.append(...onMakeMurkup(ingredients));

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().

// Добавит название ингредиента как его текстовое содержимое.

// Добавит элементу класс item.

// После чего вставит все <li> за одну операцию в список ul#ingredients.
