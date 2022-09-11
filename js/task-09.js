function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// получаю ссілку на бади. кнопку и спан
const refs = {
  body: document.body,
  actionButton: document.querySelector(".change-color"),
  textArea: document.querySelector(".color"),
};
// console.log(refs.body);

// создать событие клика на кнопку, которое меняет цвет бади, добавляя инлайн стиль
refs.actionButton.addEventListener("click", onChangeColor);

function onChangeColor() {
  // получить значение спана чтобі потом прировнять его к цвету
  const textArea = refs.textArea;

  // инлайн стиль - елем.style
  const bodyBgColor = (refs.body.style.backgroundColor = getRandomHexColor());
  console.log("onChangeColor ~ bodyBgColor", bodyBgColor);
  textArea.textContent = bodyBgColor;
}

// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.
