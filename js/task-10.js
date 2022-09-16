function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// получаем ссылки на боксес, инпутб и две кнопки
const refs = {
  input: document.querySelector("#controls input"),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  boxesContainer: document.querySelector("#boxes"),
};

// создаю событие нажатия на кнопку create
refs.createBtn.addEventListener("click", (e) => {
  // создаю пустой массив для хранения результатов цыкла
  let boxesArray = [];

  // console.log("refs.createBtn.addEventListener ~ boxesArray", boxesArray);

  // создаю переменные, которые будут хранить значение инпута и максимально допустимое значение
  const inputValue = refs.input.value;
  const inputMaxValue = refs.input.max;

  // console.log("refs.input.addEventListener ~  inputValue", inputValue);

  // создаю цикл перебора до значения инпута, не превішающего максимальное значение
  for (let i = 0; i < inputValue && i < inputMaxValue; i += 1) {
    const box = `<div style='background-color: ${getRandomHexColor()}; width: ${
      30 + i * 10
    }px; height: ${30 + i * 10}px; margin-top: 15px'></div>`;

    // результаты перебора пушу в массив
    boxesArray.push(box);
  }

  // refs.boxesContainer.append(...boxesArray);
  refs.boxesContainer.innerHTML = boxesArray.join("");
});

// создаю событие нажатия на кнопку destroy
refs.destroyBtn.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  refs.boxesContainer.innerHTML = "";
  refs.input.value = "";
}

// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.`

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.
