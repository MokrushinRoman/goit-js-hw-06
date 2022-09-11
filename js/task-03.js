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

// получаем ссылку на список
const galeryListEl = document.querySelector(".gallery");

// делаем у списка флекс дисплей
galeryListEl.classList.add("gallery--disp-flex");

// создаем перебирающую функцию
const onAddPhotos = (array) =>
  array.map(({ url, alt }) => {
    // создаем элемент ли с помощью шаблонной строки и в каждый ли добавляем тег имг с помошью инсертАджас
    const galleryItemEl = document.createElement("li");

    galleryItemEl.insertAdjacentHTML(
      "afterbegin",
      `<img src="${url}" alt="${alt}" width="100%">`
    );

    return galleryItemEl;
  });

// заливаем все в список
galeryListEl.append(...onAddPhotos(images));

// Используй массив объектов images для создания элементов <img> вложенных в <li>. Для создания разметки используй шаблонные строки и метод insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через CSS классы.
